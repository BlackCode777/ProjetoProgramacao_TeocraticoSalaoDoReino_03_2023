import { Injectable } from '@angular/core';
import { UsuariosModel } from './model/usuariosModel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
        providedIn: 'root'
})
export class UsuarioServService {

        private url: string = 'url do back'
        private user: UsuariosModel[] = [];

        constructor(
                private http: HttpClient
        ) { }

        getUsuarios() {
                return this.http.get<UsuariosModel>(this.url)                
        }

}
