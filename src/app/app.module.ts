import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

//importando a biblioteca de paginação de dados 
import { NgxPaginationModule } from 'ngx-pagination'; 

//importando o modulo de filtro de busca
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//importando classes para configurar a biblioteca de rotas do angular 
import { Routes, RouterModule } from '@angular/router';

//importando as bibliotecas do Angular para desenvolvimento de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapeando endereço de navegação
const routes : Routes = [
  {path : '', component : PainelPrincipalComponent},
  {path : 'cadastro-tarefas', component : CadastroTarefasComponent},
  {path : 'consulta-tarefas', component : ConsultaTarefasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PainelPrincipalComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent
  ],
  imports: [
    BrowserModule,
    //registrando as rotas mapeadas
    RouterModule.forRoot(routes),
    //registrando os módulos de formulário
    ReactiveFormsModule,
    FormsModule,
    //registrando a biblioteca de paginação
    NgxPaginationModule,
    //registrando a biblioteca de filtro de bisca
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
