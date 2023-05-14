import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

        {  path: '', component: LoginComponent  },
        {  path: 'home', component: HomeComponent  }

        /*
        { path: '', redirectTo: '/login', pathMatch: 'full' }, 
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },      
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        */               

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
