import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
@Component({
  selector: 'app-prestamos',
  imports: [FormsModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  usuario: string = '';
  titulo: string = '';

  constructor(public biblioteca: BibliotecaService) {}

  prestamo() {
    if (!this.usuario || !this.titulo) {
      alert('Por favor, completa ambos campos.');
      return;
    }

    const exito = this.biblioteca.solicitarPrestamo(this.usuario, this.titulo);

    if (exito) {
      alert(`Préstamo de "${this.titulo}" registrado a: ${this.usuario}`);
      this.usuario = '';
      this.titulo = '';
    } else {
      alert('El libro no se encuentra disponible en el catálogo.');
    }
  }
}
