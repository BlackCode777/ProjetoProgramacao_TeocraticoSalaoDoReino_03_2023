import { Injectable } from '@angular/core';
import { UsuariosModel } from './model/usuariosModel.model';

@Injectable({
        providedIn: 'root'
})
export class UsuarioServService {

        url: string = 'url do back'
        private heroes: UsuariosModel[] = [];

        constructor() { }

        getUsuarios() {
                // this.backend.getAll(Hero).then((heroes: Hero[]) => {
                //         this.logger.log(`Fetched ${heroes.length} heroes.`);
                //         this.heroes.push(...heroes); // fill cache
                // });
                return this.heroes;
        }

}
