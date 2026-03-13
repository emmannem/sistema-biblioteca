import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
@Component({
  selector: 'app-devolver',
  imports: [FormsModule],
  templateUrl: './devolver.html',
  styleUrl: './devolver.css',
})
export class Devolver {
  usuario = '';
  titulo = '';
  dias: number = 0;

  constructor(public biblioteca: BibliotecaService) {}

  devolver() {
    if (this.dias < 0) {
      alert('Los días de retraso no pueden ser negativos');
      return;
    }

    const respuesta = this.biblioteca.devolverLibro(this.usuario, this.titulo, this.dias);

    if (respuesta === 'Prestamo no realizado') {
      alert(`Error: El libro "${this.titulo}" no está prestado a nombre de "${this.usuario}".`);
    } else {
      alert(respuesta);

      this.usuario = '';
      this.titulo = '';
      this.dias = 0;
    }
  }
}
