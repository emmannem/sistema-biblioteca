import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../services/biblioteca.service';
@Component({
  selector: 'app-prestamos',
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  // Variables ligadas a los inputs mediante [(ngModel)]
  usuario: string = '';
  titulo: string = '';

  constructor(public biblioteca: BibliotecaService) {}

  prestamo() {
    if (this.usuario && this.titulo) {
      // Llamamos al método del servicio
      const exito = this.biblioteca.solicitarPrestamo(this.usuario, this.titulo);

      if (exito) {
        alert('Préstamo realizado con éxito');
        // Limpiamos los campos después de la operación
        this.usuario = '';
        this.titulo = '';
      } else {
        alert('No se pudo realizar el préstamo. Verifica si el libro existe en el catálogo.');
      }
    } else {
      alert('Por favor, completa ambos campos.');
    }
  }
}
