import { Component, EventEmitter, Output } from '@angular/core';
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

  onValorBusquedaChange() {
    console.log('Nuevo valor:', this.valorBusqueda);
    this.busqueda.emit(this.valorBusqueda);
  }
}
