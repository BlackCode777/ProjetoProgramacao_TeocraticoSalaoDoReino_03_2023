import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

        // @Input()
        // public route!: Route;

        constructor( private router: Router ){}

        entrarNaHome(){
                this.router.navigate(['/home'])
        }

}
