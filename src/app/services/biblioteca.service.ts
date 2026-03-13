import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  MULTA_POR_DIA = 50;

  catalogo: string[] = [
    'Harry Potter',
    'El Principito',
    'El Quijote',
    '50 Sombras',
    'Base de Datos',
    'El señor de los anillos',
    'Batman',
    'Padre rico padre pobre',
    'Spider-man',
    'Invencible',
    'Java 17 Para Principiantes',
    'Python Básico',
  ];

  usuarios: string[] = [];

  prestamos: any[] = [];

  multas: any[] = [];

  iniciarSesion(nombre: string) {
    this.usuarios.push(nombre);
  }

  buscarLibro(titulo: string) {
    return this.catalogo.includes(titulo);
  }

  solicitarPrestamo(usuario: string, titulo: string) {
    if (this.buscarLibro(titulo)) {
      this.prestamos.push({
        usuario: usuario,
        libro: titulo,
      });

      this.catalogo = this.catalogo.filter((libro) => libro != titulo);

      return true;
    }

    return false;
  }

  devolverLibro(usuario: string, titulo: string, dias: number) {
    const index = this.prestamos.findIndex((p) => p.usuario == usuario && p.libro == titulo);

    if (index == -1) {
      return 'Prestamo no realizado';
    }

    this.prestamos.splice(index, 1);

    this.catalogo.push(titulo);

    if (dias > 0) {
      const total = dias * this.MULTA_POR_DIA;

      this.multas.push({
        usuario: usuario,
        libro: titulo,
        total: total,
      });

      return 'Multa: ' + total;
    }

    return 'Devolución exitosa';
  }
}
