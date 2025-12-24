import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EventData {
  event_name: 'Lead' | 'ViewContent' | 'Contact' | 'InitiateCheckout';
  event_id?: string;
  user_data?: {
    email?: string;
    phone?: string;
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: {
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    content_type?: string;
    value?: number;
    currency?: string;
  };
  event_source_url?: string;
}

// Hash function for user data (SHA-256)
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Normalize phone number
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const PIXEL_ID = Deno.env.get('META_PIXEL_ID');
    const ACCESS_TOKEN = Deno.env.get('META_ACCESS_TOKEN');

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      console.error('Missing META_PIXEL_ID or META_ACCESS_TOKEN');
      return new Response(
        JSON.stringify({ error: 'Meta configuration missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body: EventData = await req.json();
    console.log('Received event:', body.event_name);

    // Generate event_id if not provided (for deduplication with client-side pixel)
    const eventId = body.event_id || crypto.randomUUID();
    const eventTime = Math.floor(Date.now() / 1000);

    // Prepare user data with hashing
    const userData: Record<string, string> = {};
    
    if (body.user_data?.email) {
      userData.em = await hashData(body.user_data.email);
    }
    if (body.user_data?.phone) {
      userData.ph = await hashData(normalizePhone(body.user_data.phone));
    }
    if (body.user_data?.client_ip_address) {
      userData.client_ip_address = body.user_data.client_ip_address;
    }
    if (body.user_data?.client_user_agent) {
      userData.client_user_agent = body.user_data.client_user_agent;
    }
    if (body.user_data?.fbc) {
      userData.fbc = body.user_data.fbc;
    }
    if (body.user_data?.fbp) {
      userData.fbp = body.user_data.fbp;
    }

    // Build the event payload
    const eventPayload = {
      data: [
        {
          event_name: body.event_name,
          event_time: eventTime,
          event_id: eventId,
          event_source_url: body.event_source_url || '',
          action_source: 'website',
          user_data: userData,
          custom_data: body.custom_data || {},
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    console.log('Sending to Meta Conversions API:', JSON.stringify(eventPayload, null, 2));

    // Send to Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventPayload),
      }
    );

    const result = await response.json();
    console.log('Meta API response:', JSON.stringify(result));

    if (!response.ok) {
      console.error('Meta API error:', result);
      return new Response(
        JSON.stringify({ error: 'Meta API error', details: result }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, event_id: eventId, result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in meta-conversions:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
