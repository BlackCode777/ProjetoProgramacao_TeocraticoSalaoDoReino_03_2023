import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { UsuariosListModule } from '../usuarios-list/usuarios-list.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({       
        declarations: [
                HomeComponent
        ],
        imports: [
                CommonModule,
                HomeRoutingModule,
                BrowserModule,
                BrowserAnimationsModule,
                UsuariosModule,
                UsuariosListModule

        ]
})
export class HomeModule { }
