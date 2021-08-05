import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  //guardar uma lista de tarefas em memória
  tarefas: Tarefa[] = []; //inicializando como um array (lista)

  constructor() { }

  //criando uma função para capturar uma tarefa vinda da página
  //de cadastro e adiciona-la na lista que está em memória
  addTarefa(item : Tarefa) : void {
    //adicionar na lista
    this.tarefas.push(item);
  }

  //criando uma função que retorne todo o conteudo
  //da lista de tarefas que está em memória
  getTarefas() : Tarefa[] {
    return this.tarefas;
  }
}


