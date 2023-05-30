import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
        declarations: [
                AppComponent
        ],
        imports: [
                BrowserModule,
                HomeModule,
                LoginModule,
                AppRoutingModule,                
                NgbModule,
                CommonModule,
                BrowserAnimationsModule
                
//     SharedModule,
//     BrowserAnimationsModule

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
