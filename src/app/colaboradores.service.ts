//import { Injectable } from '@angular/core';

//@Injectable({
 // providedIn: 'root'
//})
//export class ColaboradoresService {

  //constructor() { }
//}
// src/app/colaboradores.service.ts
import { Injectable } from '@angular/core';

export interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  private colaboradores: Colaborador[] = [];
  private nextId: number = 1;

  constructor() { }

  getColaboradores(): Colaborador[] {
    return this.colaboradores;
  }

  addColaborador(colaborador: Colaborador): void {
    colaborador.id = this.nextId++;
    this.colaboradores.push(colaborador);
  }

  updateColaborador(updatedColaborador: Colaborador): void {
    const index = this.colaboradores.findIndex(c => c.id === updatedColaborador.id);
    if (index !== -1) {
      this.colaboradores[index] = updatedColaborador;
    }
  }

  deleteColaborador(id: number): void {
    this.colaboradores = this.colaboradores.filter(c => c.id !== id);
  }
}
