
import { sendContactEmail } from './send-contact';
import { sendQuoteEmail } from './send-quote';

// Simpler router for Vite development environment
export async function handleFetchRequest(request: Request) {
  const url = new URL(request.url);
  
  // Handle contact form submissions
  if (url.pathname === '/api/send-contact' && request.method === 'POST') {
    try {
      const formData = await request.json();
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // Handle quote form submissions
  if (url.pathname === '/api/send-quote' && request.method === 'POST') {
    try {
      const formData = await request.json();
      const result = await sendQuoteEmail(formData);
      
      if (result.success) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // Handle 404 for unmatched routes
  return new Response(JSON.stringify({ error: 'Not Found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
