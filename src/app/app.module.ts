import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

//importando a biblioteca de gráficos
import { ChartModule } from 'angular-highcharts';

//importando a biblioteca para paginação de dados
import { NgxPaginationModule } from 'ngx-pagination';

//importando a biblioteca para filtros de busca
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//importando as classes para configurar a biblioteca de rotas do angular
import { Routes, RouterModule } from '@angular/router';

//importando as bibliotecas do Angular para desenvolvimento de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//para cada componente que iremos acessar no site, precisamos
//mapear um endereço de navegação (URL, ROTA)
const routes : Routes = [
  //para cada componente, iremos definir um PATH (caminho de url)
  { path : '', component : PainelPrincipalComponent },
  { path : 'cadastro-tarefas', component : CadastroTarefasComponent },
  { path : 'consulta-tarefas', component : ConsultaTarefasComponent }
];

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
    //registrando os módulos de formulários
    FormsModule,
    ReactiveFormsModule,
    //registrando a biblioteca de paginação
    NgxPaginationModule,
    //registrando a bilbioteca de filtro de busca
    Ng2SearchPipeModule,
    //registrando a biblioteca de gráficos do highcharts
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }