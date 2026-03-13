import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  login() {
    // Llamamos al método login del servicio pasando las credenciales
    if (this.auth.login(this.usuario, this.password)) {
      alert('Bienvenido bibliotecario');
      // Navegación a la ruta protegida por el Layout
      this.router.navigate(['/catalogo']);
    } else {
      alert('Credenciales incorrectas');
      // Limpiamos la contraseña y usuario por seguridad
      this.usuario = '';
      this.password = '';
    }
  }
}
