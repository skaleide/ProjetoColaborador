//import { Component } from '@angular/core';

//@Component({
  //selector: 'app-colaboradores-form',
  //standalone: true,
  //imports: [],
  //templateUrl: './colaboradores-form.component.html',
  //styleUrl: './colaboradores-form.component.css'
//})
//export class ColaboradoresFormComponent {

//}

// src/app/colaboradores-form/colaboradores-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';

@Component({
  selector: 'app-colaboradores-form',
  templateUrl: './colaboradores-form.component.html',
  styleUrls: ['./colaboradores-form.component.css']
})
export class ColaboradoresFormComponent implements OnInit {
  @Input() colaborador: Colaborador | null = null;
  @Output() colaboradorSaved = new EventEmitter<void>();

  nome: string = '';
  cargo: string = '';

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit(): void {
    if (this.colaborador) {
      this.nome = this.colaborador.nome;
      this.cargo = this.colaborador.cargo;
    }
  }

  onSave(): void {
    if (this.colaborador) {
      this.colaborador.nome = this.nome;
      this.colaborador.cargo = this.cargo;
      this.colaboradoresService.updateColaborador(this.colaborador);
    } else {
      this.colaboradoresService.addColaborador({ id: 0, nome: this.nome, cargo: this.cargo });
    }
    this.colaboradorSaved.emit();
    this.clearForm();
  }

  clearForm(): void {
    this.nome = '';
    this.cargo = '';
    this.colaborador = null;
  }
}

