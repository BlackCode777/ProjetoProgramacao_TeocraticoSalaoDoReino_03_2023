import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [        

        { path:'', redirectTo:'login', pathMatch:'full'  },

        { 
                path: 'login', 
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule), 
                // component: LoginComponent 
        }, 
        
        { 
                path: 'home', 
                component: HomeComponent,               
        },

        // { 
        //         path: 'usuarios', 
        //         loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
        //         // component: UsuariosComponent 
        // },
        // { 
        //         path: 'usuariosList', 
        //         loadChildren: () => import('./usuarios-list/usuarios-list.module').then(m => m.UsuariosListModule),
        //         // component:  UsuariosListComponent
        // }
        
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
