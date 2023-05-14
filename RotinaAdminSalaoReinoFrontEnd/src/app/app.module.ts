import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';

@NgModule({
        declarations: [
                AppComponent
        ],
        imports: [
                BrowserModule,
                AppRoutingModule,
                HomeModule,
                LoginModule,
                NgbModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
