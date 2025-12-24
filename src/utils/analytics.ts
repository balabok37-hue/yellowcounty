import { supabase } from '@/integrations/supabase/client';

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

// Get Facebook cookies for better matching
function getFacebookCookies() {
  const cookies: { fbc?: string; fbp?: string } = {};
  
  try {
    const cookieString = document.cookie;
    const fbcMatch = cookieString.match(/_fbc=([^;]+)/);
    const fbpMatch = cookieString.match(/_fbp=([^;]+)/);
    
    if (fbcMatch) cookies.fbc = fbcMatch[1];
    if (fbpMatch) cookies.fbp = fbpMatch[1];
  } catch (e) {
    console.warn('Could not read Facebook cookies:', e);
  }
  
  return cookies;
}

// Generate unique event ID for deduplication
function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Track ViewContent event (when viewing a machine page)
export async function trackViewContent(params: {
  contentName: string;
  contentCategory: string;
  contentId: string;
  value: number;
  currency?: string;
}) {
  const eventId = generateEventId();
  const { fbc, fbp } = getFacebookCookies();

  // Client-side pixel (with eventID for deduplication)
  if (window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: params.contentName,
      content_category: params.contentCategory,
      content_ids: [params.contentId],
      content_type: 'product',
      value: params.value,
      currency: params.currency || 'USD',
    }, { eventID: eventId });
  }

  // Server-side via edge function
  try {
    await supabase.functions.invoke('meta-conversions', {
      body: {
        event_name: 'ViewContent',
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: navigator.userAgent,
          fbc,
          fbp,
        },
        custom_data: {
          content_name: params.contentName,
          content_category: params.contentCategory,
          content_ids: [params.contentId],
          content_type: 'product',
          value: params.value,
          currency: params.currency || 'USD',
        },
      },
    });
  } catch (error) {
    console.error('Failed to send ViewContent to server:', error);
  }
}

// Track Lead event (when submitting contact form)
export async function trackLead(params: {
  email: string;
  phone?: string;
  contentName?: string;
  value?: number;
}) {
  const eventId = generateEventId();
  const { fbc, fbp } = getFacebookCookies();

  // Client-side pixel (with eventID for deduplication)
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: params.contentName || 'Contact Form',
      value: params.value || 0,
      currency: 'USD',
    }, { eventID: eventId });
  }

  // Server-side via edge function (includes email/phone for better matching)
  try {
    await supabase.functions.invoke('meta-conversions', {
      body: {
        event_name: 'Lead',
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          email: params.email,
          phone: params.phone,
          client_user_agent: navigator.userAgent,
          fbc,
          fbp,
        },
        custom_data: {
          content_name: params.contentName || 'Contact Form',
          value: params.value || 0,
          currency: 'USD',
        },
      },
    });
  } catch (error) {
    console.error('Failed to send Lead to server:', error);
  }
}

// Track Contact event (when clicking phone/email/whatsapp)
export async function trackContact(params: {
  contactMethod: 'phone' | 'email' | 'whatsapp';
  contactValue?: string;
}) {
  const eventId = generateEventId();
  const { fbc, fbp } = getFacebookCookies();

  // Client-side pixel
  if (window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: params.contactMethod,
    }, { eventID: eventId });
  }

  // Server-side
  try {
    await supabase.functions.invoke('meta-conversions', {
      body: {
        event_name: 'Contact',
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: navigator.userAgent,
          fbc,
          fbp,
        },
        custom_data: {
          content_name: params.contactMethod,
        },
      },
    });
  } catch (error) {
    console.error('Failed to send Contact to server:', error);
  }
}
