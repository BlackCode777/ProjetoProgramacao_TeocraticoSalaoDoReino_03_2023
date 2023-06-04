import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
        exports: [LoginComponent],
        declarations: [
                LoginComponent
        ],
        imports: [
                CommonModule,
                LoginRoutingModule,


        ]
})
export class LoginModule { }
