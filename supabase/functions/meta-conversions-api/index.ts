import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PIXEL_ID = '1541195530338388';
const API_VERSION = 'v21.0';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('META_ACCESS_TOKEN');
    if (!accessToken) {
      console.error('[Meta CAPI] META_ACCESS_TOKEN not configured');
      return new Response(
        JSON.stringify({ error: 'META_ACCESS_TOKEN not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const { event_name, event_id, user_data, custom_data, event_source_url } = body;

    console.log('[Meta CAPI] Received event:', { event_name, event_id, event_source_url });

    // Build event payload
    const eventData = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id,
      event_source_url: event_source_url || 'https://yellowcounty.com',
      action_source: 'website',
      user_data: {
        ...user_data,
        client_user_agent: req.headers.get('user-agent') || '',
        client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                          req.headers.get('cf-connecting-ip') || 
                          'unknown'
      }
    };

    // Add custom data if provided (for Lead events, could include equipment type)
    if (custom_data) {
      (eventData as any).custom_data = custom_data;
    }

    const payload = {
      data: [eventData]
    };

    console.log('[Meta CAPI] Sending to Meta:', JSON.stringify(payload, null, 2));

    // Send to Meta Conversions API
    const metaResponse = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const metaResult = await metaResponse.json();
    console.log('[Meta CAPI] Meta response:', JSON.stringify(metaResult, null, 2));

    if (!metaResponse.ok) {
      console.error('[Meta CAPI] Error from Meta:', metaResult);
      return new Response(
        JSON.stringify({ error: 'Meta API error', details: metaResult }),
        { status: metaResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, result: metaResult }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Meta CAPI] Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
