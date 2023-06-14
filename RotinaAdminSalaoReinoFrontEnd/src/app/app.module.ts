import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientModule } from  '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { DesignacaoModule } from './designacao/designacao.module';


@NgModule({
        declarations: [
                AppComponent,
                HomeComponent
        ],
        imports: [
                BrowserModule,
                LoginModule,
                AppRoutingModule,                
                NgbModule,
                CommonModule,
                BrowserAnimationsModule,
                UsuarioModule,
                HttpClientModule,
                DashboardModule,
                DesignacaoModule
        ],
        providers: [], //declara os serviços aqui dentro
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

        constructor(library: FaIconLibrary) {
                library.addIcons(
                        faSquare,
                        faCheckSquare,
                );
        }

}
