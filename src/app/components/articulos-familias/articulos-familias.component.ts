import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia, ArticulosFamilias} from '../../models/articulo-familia';
import {ArticulosFamiliasService} from "../../services/articulos-familias.service";

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {
  Items: ArticuloFamilia[] = [];
  Titulo = "Artículos familias";

  constructor(
    private articulosFamiliasService: ArticulosFamiliasService,
  ) { }

  ngOnInit(): void {
    this.articulosFamiliasService.get().subscribe(
      res => {
       this.Items = res;
      });
  }

}
