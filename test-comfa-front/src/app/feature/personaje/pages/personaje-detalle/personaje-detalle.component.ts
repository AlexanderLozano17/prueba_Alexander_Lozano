import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportarPersonajeService } from '../../services/importar-personaje.service';
import { PersonajeImportar } from '../../models/ImportarPersonaje.model';
import { CommonModule, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-personaje-detalle',
  standalone: true,
  imports: [CommonModule, DatePipe, NgClass],
  templateUrl: './personaje-detalle.component.html',
  styleUrl: './personaje-detalle.component.css'
})
export class PersonajeDetalleComponent implements OnInit {

  personaje?: PersonajeImportar;

  constructor(private route: ActivatedRoute, private personajeImportadoService: ImportarPersonajeService) {}

  ngOnInit(): void {
    this.obtnerPersonajeImportado();
  }

  obtnerPersonajeImportado() {
    const idPersonaje = this.route.snapshot.params['id'];
    console.log("id que llega por la url " + idPersonaje);
    this.personajeImportadoService.obtenerPersonajeImportado(idPersonaje).subscribe({
      next: (response) => {
        console.log(response);
        this.personaje = response;
      },
      error: (e) => {
        console.log("error al obtener el personaje importado | " + e);
      }
    });
  }
}
