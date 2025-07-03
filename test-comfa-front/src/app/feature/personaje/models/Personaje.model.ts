export interface UbicacionRickMorty {
  name: string;
  url: string;
}

/**
 * Interfaz principal para el objeto Personaje de Rick and Morty.
 */
export interface Personaje {
  id: number;
  name: string; // Nombre del personaje
  status: string; // Estado (e.g., "Alive", "Dead", "unknown")
  species: string; // Especie (e.g., "Human", "Alien")
  type: string; // Tipo (puede ser una cadena vacía si no aplica)
  gender: string; // Género (e.g., "Male", "Female", "unknown")
  
  // Objetos anidados para origen y ubicación
  origin: UbicacionRickMorty;
  location: UbicacionRickMorty;
  
  image: string; // URL de la imagen del personaje
  episode: string[]; // Array de URLs de los episodios en los que aparece
  url: string; // URL de la API del personaje
  created: string; // Fecha de creación del registro (formato ISO 8601)
  
}

export interface ApiResponse {
  results: Personaje[];
}