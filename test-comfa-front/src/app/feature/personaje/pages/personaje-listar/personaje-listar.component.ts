import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Subscriber, Subscription } from 'rxjs';
import { CardPersonajeComponent } from '../../components/card-personaje/card-personaje.component';
import { Personaje, UbicacionRickMorty } from '../../models/Personaje.model';
import { ImportarPersonajeService } from '../../services/importar-personaje.service';
import { PersonajeImportar, Ubicacion } from '../../models/ImportarPersonaje.model';

@Component({
  selector: 'app-personaje-listar',
  standalone: true,
  imports: [CardPersonajeComponent],
  templateUrl: './personaje-listar.component.html',
  styleUrl: './personaje-listar.component.css'
})
export class PersonajeListarComponent implements OnInit {

  private personajesSubscription!: Subscription;

  constructor(public personajeService: PersonajeService, public importPersonajeService: ImportarPersonajeService) {}

  ngOnInit(): void {
    
    this.cargarPersonajes();
  }

  ngOnDestroy(): void { 
    console.log('PersonajeListarComponent: ngOnDestroy llamado');
    if (this.personajesSubscription) {
       this.personajesSubscription.unsubscribe(); 
    }
  }

  cargarPersonajes(): void {
    this.personajesSubscription = this.personajeService.obtenerPersonajes().subscribe({
      next: (response) => {
        console.log(response);
        this.personajeService.personajes = response;
      },
      error: (e) => {
        console.log(e);
        alert("error al obtener el listado de personajes");
      }
    });
  }

  importarPersonaje(id: number): void {
    console.log(`[Padre] Intentando importar personaje con ID: ${id}`);
    
    this.personajeService.obtenerPersonaje(id).subscribe({
      next: (personajeRickMorty: Personaje) => {
        console.log('[Padre] Personaje de Rick and Morty obtenido:', personajeRickMorty);

        const personajeParaImportar: PersonajeImportar = this.importPersonajeService.mapPersonajeToPersonajeImportar(personajeRickMorty);
        console.log('[Padre] Personaje mapeado para importar:', personajeParaImportar);

        // Enviar el personaje mapeado al endpoint de importación
        this.importPersonajeService.importarPersonaje(personajeParaImportar).subscribe({
          next: (response) => {
            console.log('Personaje importado exitosamente:', response);
            alert(`"${personajeParaImportar.nombre}" importado exitosamente!`);
          },
          error: (e) => {
            console.error('Error al importar el personaje:', e);
            alert('Error al importar el personaje: ' + (e.message || 'Error desconocido'));
          }
        });
      },
      error: (e) => {
        console.error('Error al obtener el personaje de Rick and Morty:', e);
        alert('Error al obtener el personaje de Rick and Morty: ' + (e.message || 'Error desconocido'));
      }
    });
  }
}
