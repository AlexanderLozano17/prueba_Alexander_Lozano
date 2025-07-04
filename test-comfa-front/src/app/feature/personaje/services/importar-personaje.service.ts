import { Injectable } from '@angular/core';
import { environment } from '../../../../environments';
import { PersonajeImportar, Ubicacion } from '../models/ImportarPersonaje.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje, UbicacionRickMorty } from '../models/Personaje.model';

@Injectable({
  providedIn: 'root'
})
export class ImportarPersonajeService {

  private personajesApiUrl = environment.endpoints.personajes; 
  public personaje: PersonajeImportar | undefined;
  public personajes: PersonajeImportar[] = [];

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param personaje 
   * @returns 
   */
  importarPersonaje(personaje: PersonajeImportar): Observable<PersonajeImportar> {
    return this.http.post<PersonajeImportar>(this.personajesApiUrl, personaje);
  }

  /**
   * 
   * @returns 
   */
  obtenerPersonajeImportados(): Observable<PersonajeImportar[]> {
    return this.http.get<PersonajeImportar[]>(this.personajesApiUrl);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  obtenerPersonajeImportado(id: number): Observable<PersonajeImportar> {
    return this.http.get<PersonajeImportar>(`${this.personajesApiUrl}/${id}`);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  eliminarPersonajeImportado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.personajesApiUrl}/${id}`, { observe: 'response' });
  }
  
  private mapUbicacionRickMortyToUbicacion(ubicacionRM: UbicacionRickMorty): Ubicacion {
    return {
      nombre: ubicacionRM.name,
      url: ubicacionRM.url,
    };
  }

  /**
   * Función de mapeo principal: Convierte un Personaje (API Rick and Morty) a PersonajeImportar (modelo español).
   * Es 'public' para que otros componentes/servicios puedan usarla si necesitan el mapeo.
   * @param personaje El objeto Personaje en el formato de la API de Rick and Morty.
   * @returns El objeto Personaje en tu formato PersonajeImportar.
   */
  mapPersonajeToPersonajeImportar(personaje: Personaje): PersonajeImportar {
    return {
      id: personaje.id,
      nombre: personaje.name,
      estado: personaje.status,
      especie: personaje.species,
      tipo: personaje.type,
      genero: personaje.gender,

      imagen_url: personaje.image,
      url: personaje.url,
      created_at: personaje.created,
      origen: this.mapUbicacionRickMortyToUbicacion(personaje.origin),
      ubicacion: this.mapUbicacionRickMortyToUbicacion(personaje.location),
    };
  }
}
