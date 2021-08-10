import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { TarefasService } from '../services/tarefas.service'; 

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit {

  message = "";

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {
  }

  formCadastroTarefa = new FormGroup(
    {
      nome : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150),
      ]),
      data : new FormControl('', [
        Validators.required,
      ]),
      hora : new FormControl('', [
        Validators.required,
      ]),
      descricao : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250),
      ]),
      prioridade : new FormControl('', [
        Validators.required,
      ]),
    }
  );

  get form() : any {
    return this.formCadastroTarefa.controls;
  }

  onSubmit() : void {

    this.tarefasService.addTarefa(this.formCadastroTarefa.value)

    this.formCadastroTarefa.reset();

    this.message = 'Tarefa cadastrada com sucesso!';
  }

  clearMessage() : void {
    this.message = "";
  }

}
