import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosListRoutingModule } from './usuarios-list-routing.module';
import { UsuariosListComponent } from './usuarios-list.component';


@NgModule({
  declarations: [
    UsuariosListComponent
  ],
  imports: [
    CommonModule,
    UsuariosListRoutingModule
  ]
})
export class UsuariosListModule { }
