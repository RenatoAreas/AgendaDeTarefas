import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {

  page = 1;

  filtro = "";

  constructor(private tarefasServices: TarefasService) { }

  dados: Tarefa[] = []; 

  ngOnInit(): void {
    this.dados = this.tarefasServices.getTarefas();
  }

  //função para realizar a paginação
  handlePageChange(event : any) : void {
    this.page = event;
  }

}
