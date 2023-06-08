import { Component } from '@angular/core';
import { UsuarioServService } from '../usuario-serv.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent {

        constructor ( private usuarioServService: UsuarioServService){ }
        // getusuario(){
        //         this.usuarioServService.getUsuario()
        // }

}
