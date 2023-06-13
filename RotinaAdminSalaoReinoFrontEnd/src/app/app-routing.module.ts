import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './usuario/usuario-listagem/usuario-listagem.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [

        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
                component: LoginComponent
        },
        {
                path: 'home',
                component: HomeComponent,                
        },
        {
                path: 'usuarioCadastro',
                loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
                component: UsuarioCadastroComponent
        },
        {
                path: 'usuariosList',
                loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
                component: UsuarioListagemComponent
        },
        {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                component: DashboardComponent
        }


        // { path:'', redirectTo:'login', pathMatch:'full'  },
        // {path:'login', component:LoginComponent },
        //{  path: 'home', component: HomeComponent  },
        //{  path:'usuarios', component: UsuariosComponent  },
        //{  path:'usuariosList', component: UsuariosListComponent  }  
        // { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
        // { path: 'usuariosList', loadChildren: () => import('./usuarios-list/usuarios-list.module').then(m => m.UsuariosListModule) }
        // { path: '', redirectTo: '/login', pathMatch: 'full' }, 
        // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },      
        // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
