import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInput = (data: unknown): { valid: boolean; error?: string; data?: { name: string; email: string; phone?: string; message: string } } => {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { name, email, phone, message } = data as Record<string, unknown>;

  // Validate name
  if (typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'Name is required' };
  }
  if (name.length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters' };
  }

  // Validate email
  if (typeof email !== 'string' || email.trim().length === 0) {
    return { valid: false, error: 'Email is required' };
  }
  if (email.length > 255) {
    return { valid: false, error: 'Email must be less than 255 characters' };
  }
  if (!validateEmail(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  // Validate phone (optional)
  if (phone !== undefined && phone !== null && phone !== '') {
    if (typeof phone !== 'string') {
      return { valid: false, error: 'Phone must be a string' };
    }
    if (phone.length > 20) {
      return { valid: false, error: 'Phone must be less than 20 characters' };
    }
  }

  // Validate message
  if (typeof message !== 'string' || message.trim().length === 0) {
    return { valid: false, error: 'Message is required' };
  }
  if (message.length > 2000) {
    return { valid: false, error: 'Message must be less than 2000 characters' };
  }

  return {
    valid: true,
    data: {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 255),
      phone: phone ? String(phone).trim().slice(0, 20) : undefined,
      message: message.trim().slice(0, 2000)
    }
  };
};

// Escape Markdown special characters to prevent injection
const escapeMarkdown = (text: string): string => {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate input
    const validation = validateInput(rawData);
    if (!validation.valid || !validation.data) {
      console.error('Validation error:', validation.error);
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { name, email, phone, message } = validation.data;
    
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID');
    
    if (!botToken || !chatId) {
      console.error('Missing Telegram credentials');
      throw new Error('Telegram credentials not configured');
    }

    // Escape user input for Markdown to prevent injection
    const safeName = escapeMarkdown(name);
    const safeEmail = escapeMarkdown(email);
    const safePhone = phone ? escapeMarkdown(phone) : 'Не указан';
    const safeMessage = escapeMarkdown(message);

    const telegramMessage = `🔔 *Новая заявка\\!*

👤 *Имя:* ${safeName}
📧 *Email:* ${safeEmail}
📱 *Телефон:* ${safePhone}

💬 *Сообщение:*
${safeMessage}

⏰ ${escapeMarkdown(new Date().toLocaleString('ru-RU', { timeZone: 'America/Denver' }))}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'MarkdownV2',
      }),
    });

    const result = await response.json();
    
    if (!result.ok) {
      console.error('Telegram API error:', result);
      throw new Error(`Telegram API error: ${result.description}`);
    }

    console.log('Telegram notification sent successfully');

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending Telegram notification:', error);
    return new Response(JSON.stringify({ error: 'Failed to send notification' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
