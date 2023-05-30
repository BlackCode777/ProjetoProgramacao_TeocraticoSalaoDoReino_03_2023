import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

        icon: any

        constructor( private router: Router, private routerList: Router ){}

        entraNoCadastroDeUsuarios(){
                this.router.navigate(['/usuarios'])
        }

        entraNaListagemDeUsuarios(){
                this.routerList.navigate(['/usuariosList'])
        }

}
