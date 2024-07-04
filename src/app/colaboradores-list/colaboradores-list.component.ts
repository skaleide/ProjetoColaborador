//import { Component } from '@angular/core';

//@Component({
  //selector: 'app-colaboradores-list',
  //standalone: true,
  //imports: [],
  //templateUrl: './colaboradores-list.component.html',
  //styleUrl: './colaboradores-list.component.css'
//})
//export class ColaboradoresListComponent {

//}
// src/app/colaboradores-list/colaboradores-list.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores.service';

@Component({
  selector: 'app-colaboradores-list',
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.css']
})
export class ColaboradoresListComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  @Output() editColaborador = new EventEmitter<Colaborador>();

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit(): void {
    this.colaboradores = this.colaboradoresService.getColaboradores();
  }

  onEdit(colaborador: Colaborador): void {
    this.editColaborador.emit(colaborador);
  }

  onDelete(id: number): void {
    this.colaboradoresService.deleteColaborador(id);
    this.colaboradores = this.colaboradoresService.getColaboradores();
  }
}
