import { Injectable } from '@angular/core';
import { environment } from '../../../../environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse, Personaje } from '../models/Personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private personajesApiUrl = environment.endpoints.character; 
  public personajes: Personaje[] = [];
  public personaje: Personaje | undefined;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene una lista de todos los personajes.
   * @returns Un Observable que emite un array de objetos Personaje.
   */
  obtenerPersonajes(): Observable<Personaje[]> {
    return this.http.get<ApiResponse>(this.personajesApiUrl).pipe(
      map(response => response.results)
    );
  }

  /**
   * Obtiene un personaje específico por su ID.
   * @param id El ID del personaje a buscar.
   * @returns Un Observable que emite un objeto Personaje.
   */
  obtenerPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.personajesApiUrl}/${id}`);
  }

  /**
   * Crea un nuevo personaje.
   * @param personaje Los datos del nuevo personaje. Usa Partial<Personaje>
   * porque al crear no necesitas el 'id' ni los timestamps.
   * @returns Un Observable que emite el Personaje creado.
   */
  crearPersonaje(personaje: Partial<Personaje>): Observable<Personaje> {
    return this.http.post<Personaje>(this.personajesApiUrl, personaje);
  }

  /**
   * Actualiza un personaje existente por su ID.
   * @param id El ID del personaje a actualizar.
   * @param personaje Los datos a actualizar del personaje. Usa Partial<Personaje>.
   * @returns Un Observable que emite el Personaje actualizado.
   */
  actualizarPersonaje(id: number, personaje: Partial<Personaje>): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.personajesApiUrl}/${id}`, personaje);
  }

  /**
   * Elimina un personaje por su ID.
   * @param id El ID del personaje a eliminar.
   * @returns Un Observable que no emite ningún valor (void) tras la eliminación.
   */
  eliminarPersonaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.personajesApiUrl}/${id}`);
  }

  /**
   * Busca personajes por un término de consulta.
   * Corresponde al método `buscar` en tu controlador de Laravel.
   * @param query El término de búsqueda.
   * @returns Un Observable que emite un array de objetos Personaje que coinciden.
   */
  buscarPersonajes(query: string): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.personajesApiUrl}/buscar?q=${query}`);
  }
}
