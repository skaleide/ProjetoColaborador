// src/app/app.component.ts
import { Component } from '@angular/core';
import { Colaborador } from './colaboradores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedColaborador: Colaborador | null = null;

  onEditColaborador(colaborador: Colaborador): void {
    this.selectedColaborador = colaborador;
  }

  onColaboradorSaved(): void {
    this.selectedColaborador = null;
  }
}

