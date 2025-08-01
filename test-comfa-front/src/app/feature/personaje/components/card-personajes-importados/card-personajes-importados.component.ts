import { Component, EventEmitter, input, Output } from '@angular/core';
import { PersonajeImportar } from '../../models/ImportarPersonaje.model';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-personajes-importados',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass],
  templateUrl: './card-personajes-importados.component.html',
  styleUrl: '../card-personaje/card-personaje.component.css'
})
export class CardPersonajesImportadosComponent {

  @Output() deleteId = new EventEmitter<number>(); 
  
  personaje = input<PersonajeImportar | undefined>(); 

  onEliminar():void {
    if (this.personaje() && this.personaje()?.id) {
      this.deleteId.emit(this.personaje()!.id); 
    }
  }
}
