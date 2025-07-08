import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seeker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seeker.component.html',
  styleUrl: './seeker.component.css'
})
export class SeekerComponent {

  valorBusqueda: string = '';
  @Output() busqueda = new EventEmitter<string>();

  cantidadPersonajes = input<Number | 0>();

  onValorBusquedaChange() {
    console.log('Nuevo valor:', this.valorBusqueda);
    this.busqueda.emit(this.valorBusqueda);
  }
}
