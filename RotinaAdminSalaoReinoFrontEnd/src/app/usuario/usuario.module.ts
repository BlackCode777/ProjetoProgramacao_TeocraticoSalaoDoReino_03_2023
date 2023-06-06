import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';


@NgModule({
        exports:[
                UsuarioCadastroComponent,
                UsuarioListagemComponent
        ],
        declarations: [
                UsuarioCadastroComponent,
                UsuarioListagemComponent
        ],
        imports: [
                CommonModule,
                UsuarioRoutingModule
        ]
})
export class UsuarioModule { }
