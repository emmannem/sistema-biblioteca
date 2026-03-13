import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  bibliotecario = {
    usuario: 'admin',
    password: '1234',
  };

  login(user: string, pass: string) {
    return user === this.bibliotecario.usuario && pass === this.bibliotecario.password;
  }
}
