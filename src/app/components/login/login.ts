import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  nombre = '';

  constructor(public biblioteca: BibliotecaService) {}

  iniciar() {
    this.biblioteca.iniciarSesion(this.nombre);

    alert('Bienvenido ' + this.nombre);

    this.nombre = '';
  }
}
