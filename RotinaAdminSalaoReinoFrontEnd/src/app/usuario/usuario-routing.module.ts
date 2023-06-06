import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';

const routes: Routes = [
        {path:'', component: UsuarioCadastroComponent},
        {path:'', component: UsuarioListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
