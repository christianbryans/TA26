export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:3000/api/v1" : `${window.location.origin}/api/v1`);
