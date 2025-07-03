const API_BASE = 'https://api.tudominio.com';

const API_VERSION = 'api'; 

export const environment = {
  production: false,
  debugMode: true,

  apiUrl: `${API_BASE}/${API_VERSION}`,

  endpoints: {
    personajes: `${API_BASE}/${API_VERSION}/personajes`,
  }
};