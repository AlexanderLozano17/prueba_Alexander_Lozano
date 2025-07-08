import { Component, OnInit } from '@angular/core';
import { ImportarPersonajeService } from '../../services/importar-personaje.service';
import { CardPersonajesImportadosComponent } from '../../components/card-personajes-importados/card-personajes-importados.component';
import { HttpResponse } from '@angular/common/http';
import { SeekerComponent } from '../../components/seeker/seeker.component';

@Component({
  selector: 'app-personajes-importados',
  standalone: true,
  imports: [CardPersonajesImportadosComponent,
    SeekerComponent],
  templateUrl: './personajes-importados.component.html',
  styleUrls: ['./personajes-importados.component.css',
              '../personaje-listar/personaje-listar.component.css'
  ]
})
export class PersonajesImportadosComponent implements OnInit{

  constructor(public importarPersonajeService : ImportarPersonajeService) {}

  cantidadPersonajes: Number = 0;

  ngOnInit(): void {
    this.obtenerPersonajesImportados();
  }

  obtenerPersonajesImportados(): void {
    this.importarPersonajeService.obtenerPersonajeImportados().subscribe({
      next: (response) => {
        console.log(response);
        this.importarPersonajeService.personajes = response;
        this.cantidadPersonajes = response.length;
      },
      error: (e) => {

      }
    });
  }

  buscarPersonajesImportados(valor: string): void {
    this.importarPersonajeService.buscarPersonaje(valor).subscribe({
      next: (response) => {
        console.log(valor);
        console.log(response);
        this.importarPersonajeService.personajes = response;
        this.cantidadPersonajes = response.length;
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  eliminarPersonajeImportado(id: number): void {
    this.importarPersonajeService.eliminarPersonajeImportado(id).subscribe({
      next: (response: HttpResponse<any>) => {
        const statusCode = response.status;
        const responseBody = response.body;

        console.log(`Personaje eliminado exitosamente.`);
        console.log(`Código de estado HTTP: ${statusCode}`);
        console.log(`Mensaje del servidor:`, responseBody.message);

        if (statusCode === 200 || statusCode === 204) {
          console.log(`Personaje eliminado. Estado HTTP: ${statusCode}`);
          alert('Personaje eliminado exitosamente.');
          this.obtenerPersonajesImportados();
        } else {
          console.warn(`Personaje eliminado con estado inesperado: ${statusCode}`);
          alert(`Operación completada con estado inesperado (${statusCode}).`);
          this.obtenerPersonajesImportados();
        }
      },
      error: (e) => {
        console.error('Error al eliminar el personaje:', e);
        if (e.status) {
          alert(`Error al eliminar el personaje. Código de estado: ${e.status}`);
        } else {
          alert("Error al eliminar el personaje: " + (e.message || 'Error desconocido'));
        }
      }
    });
  }

}
