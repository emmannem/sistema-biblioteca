import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../services/biblioteca.service';
@Component({
  selector: 'app-multas',
  imports: [CommonModule],
  templateUrl: './multas.html',
  styleUrl: './multas.css',
})
export class Multas {
  constructor(public biblioteca: BibliotecaService) {}
}
