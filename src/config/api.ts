const rawApiUrl = import.meta.env.VITE_API_URL?.toString()?.trim();
const normalizedApiUrl = rawApiUrl && !rawApiUrl.startsWith('http') && rawApiUrl.includes('=')
  ? rawApiUrl.split('=').pop()?.trim()
  : rawApiUrl;

export const API_URL = normalizedApiUrl && /^https?:\/\//i.test(normalizedApiUrl)
  ? normalizedApiUrl
  : import.meta.env.DEV
  ? 'http://localhost:3000/api/v1'
  : 'https://backendswm.l-prepaid.com/api/v1';
