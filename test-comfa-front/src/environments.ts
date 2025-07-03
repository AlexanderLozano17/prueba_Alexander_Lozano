const API_BASE = 'http://localhost:8000';
const API_VERSION = 'api'; 

const API_BASE_EXTERNA = "https://rickandmortyapi.com/api/"

export const environment = {
  production: false,
  debugMode: true,

  apiUrl: `${API_BASE}/${API_VERSION}`,

  endpoints: {
    personajes: `${API_BASE}/${API_VERSION}/personajes`,
    character: `${API_BASE_EXTERNA}/character`,
  }
};