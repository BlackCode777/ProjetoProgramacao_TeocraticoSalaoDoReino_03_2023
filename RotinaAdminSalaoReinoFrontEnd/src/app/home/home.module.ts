import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
        exports:[
                HomeComponent
        ],
        declarations: [
                HomeComponent
        ],
        imports: [
                CommonModule,
                HomeRoutingModule,
                BrowserAnimationsModule

        ]
})
export class HomeModule { }
