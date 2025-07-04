// src/app/features/personaje/models/personaje.model.ts

export interface LugarBase {
  id?: number;          
  nombre: string;
  tipo?: string;        
  dimension?: string;   
  url: string;
  created_at?: string;  
  updated_at?: string;
}

export interface Ubicacion extends LugarBase {}
export interface Origen extends LugarBase {}

export interface Pivot {
  personaje_id: number;
  episodio_id: number;
}

export interface Episodio {
  id?: number;  
  nombre?: string;
  fecha_emision?: string;
  codigo_episodio?: string;
  url?: string;
  created_at?: string;  
  updated_at?: string;  
  pivot?: Pivot;
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

  origen?: Origen;
  ubicacion?: Ubicacion;
  episodios?: Episodio[];
}
