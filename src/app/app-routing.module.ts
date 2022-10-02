import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import {ArticulosFamiliasComponent} from "./components/articulos-familias/articulos-familias.component";
import {ArticulosComponent} from "./components/articulos/articulos.component";

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
  { path: 'articulos', component: ArticulosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
