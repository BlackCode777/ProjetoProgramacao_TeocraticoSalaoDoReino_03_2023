import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const routes: Routes = [

        { path:'', redirectTo:'login', pathMatch:'full'  },

        //{path:'', component:LoginComponent },

        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
        { path: 'usuariosList', loadChildren: () => import('./usuarios-list/usuarios-list.module').then(m => m.UsuariosListModule) }

        //{  path: 'home', component: HomeComponent  },
        //{  path:'usuarios', component: UsuariosComponent  },
        //{  path:'usuariosList', component: UsuariosListComponent  }        

        /*
        { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
        { path: 'usuariosList', loadChildren: () => import('./usuarios-list/usuarios-list.module').then(m => m.UsuariosListModule) }
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