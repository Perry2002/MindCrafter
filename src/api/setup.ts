
import { handleFetchRequest } from './index';

// Only setup in browser environment
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  
  window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
    const request = new Request(input, init);
    const url = new URL(request.url, window.location.origin);
    
    // Only intercept requests to our API
    if (url.pathname.startsWith('/api/')) {
      return handleFetchRequest(request);
    }
    
    // For all other requests, use the original fetch
    return originalFetch(input, init);
  };
}
