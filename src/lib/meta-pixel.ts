// Meta Pixel utility functions for hashing PII and generating event IDs

const PIXEL_ID = '1541195530338388';

/**
 * Generate a UUID v4 for event deduplication
 */
export function generateEventId(): string {
  return crypto.randomUUID();
}

/**
 * Hash a string using SHA-256 (Web Crypto API)
 */
async function hashSHA256(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Normalize email: lowercase, trim whitespace
 */
function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalize phone: remove all non-digits
 */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Normalize name: lowercase, trim whitespace
 */
function normalizeName(name: string): string {
  return name.toLowerCase().trim();
}

/**
 * Hash user data for Meta Pixel advanced matching
 */
export async function hashUserData(userData: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}): Promise<{
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
}> {
  const result: { em?: string; ph?: string; fn?: string; ln?: string } = {};

  if (userData.email) {
    result.em = await hashSHA256(normalizeEmail(userData.email));
  }
  if (userData.phone) {
    result.ph = await hashSHA256(normalizePhone(userData.phone));
  }
  if (userData.firstName) {
    result.fn = await hashSHA256(normalizeName(userData.firstName));
  }
  if (userData.lastName) {
    result.ln = await hashSHA256(normalizeName(userData.lastName));
  }

  return result;
}

/**
 * Parse full name into first and last name
 */
export function parseFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' ')
  };
}

/**
 * Store lead data in sessionStorage for ThankYou page
 */
export function storeLeadData(data: {
  eventId: string;
  hashedUserData: { em?: string; ph?: string; fn?: string; ln?: string };
}) {
  sessionStorage.setItem('meta_lead_event_id', data.eventId);
  sessionStorage.setItem('meta_lead_user_data', JSON.stringify(data.hashedUserData));
}

/**
 * Retrieve and clear lead data from sessionStorage
 */
export function retrieveAndClearLeadData(): {
  eventId: string | null;
  hashedUserData: { em?: string; ph?: string; fn?: string; ln?: string } | null;
} {
  const eventId = sessionStorage.getItem('meta_lead_event_id');
  const userDataStr = sessionStorage.getItem('meta_lead_user_data');
  
  // Clear after retrieval
  sessionStorage.removeItem('meta_lead_event_id');
  sessionStorage.removeItem('meta_lead_user_data');
  
  return {
    eventId,
    hashedUserData: userDataStr ? JSON.parse(userDataStr) : null
  };
}

/**
 * Track Lead event in browser pixel with deduplication
 */
export function trackLeadEvent(eventId: string, userData?: { em?: string; ph?: string; fn?: string; ln?: string }) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {}, { eventID: eventId });
    console.log('[Meta Pixel] Lead event tracked with eventID:', eventId);
  }
}

export { PIXEL_ID };
