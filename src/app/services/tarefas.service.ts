import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  //guardar uma lista de tarefas em memória
  tarefas: Tarefa[] = [
    {
      nome : 'Aula de Java WebDeveloper',
      data : '2021-08-10',
      hora : '18:00',
      descricao : 'Aula de programação Orientada a Objetos',
      prioridade : '1'
    },
    {
      nome : 'Aula de Angular',
      data : '2021-08-10',
      hora : '9:00',
      descricao : 'Aula de programação FrontEnd',
      prioridade : '2'
    },
    {
      nome : 'Aula de ReactJS ',
      data : '2021-08-11',
      hora : '9:00',
      descricao : 'Aula de programação FrontEnd',
      prioridade : '3'
    },
    {
      nome : 'Aula de C# ',
      data : '2021-08-12',
      hora : '9:00',
      descricao : 'Aula de programação Orientada a Objetos',
      prioridade : '3'
    },
  ]; //inicializando como um array (lista)

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


