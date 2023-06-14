import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DesignacaoComponent } from "./designacao/designacao.component";

const routes: Routes = [
        { path: '', component: DesignacaoComponent }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
     })
export class DesignacaoRoutingModule { }