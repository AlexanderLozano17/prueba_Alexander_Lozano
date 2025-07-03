import { Component, EventEmitter, Input, input, Output} from '@angular/core';
import { Personaje } from '../../models/Personaje.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-personaje.component.html',
  styleUrl: './card-personaje.component.css'
})
export class CardPersonajeComponent {

  personaje = input<Personaje | undefined>(); 

  @Output() importar = new EventEmitter<number>();

  constructor(private router: Router) {

  }

  
  onImportar(): void {
    if (this.personaje() && this.personaje()?.id) {
      this.importar.emit(this.personaje()!.id); 
    }
  }

}
