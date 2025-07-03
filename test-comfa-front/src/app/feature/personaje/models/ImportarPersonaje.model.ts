// src/app/features/personaje/models/personaje.model.ts

export interface Ubicacion {
  id?: number;          
  nombre: string;
  tipo?: string;        
  dimension?: string;   
  url: string;
  created_at?: string;  
  updated_at?: string;  
}

export interface PersonajeImportar {
  id: number;
  nombre: string;
  estado: string;
  especie: string;
  tipo: string;
  genero: string;
  origen_id?: number;    
  ubicacion_id?: number; 
  imagen_url: string;
  url: string;
  created_at: string;
  updated_at?: string;   

  origen?: Ubicacion;
  ubicacion?: Ubicacion;
}

// Las interfaces Personaje, UbicacionRickMorty y ApiResponse se mantienen como estaban.