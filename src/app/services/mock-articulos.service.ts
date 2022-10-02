import { Injectable } from '@angular/core';
import { Articulos, Articulo } from '../models/articulo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MockArticulosService {
  articulos = Articulos;

  constructor() { }

  get(Nombre: string, Activo: boolean|null, pagina: number): any {
    let Items = this.articulos.filter(item =>
      // Nombre == null chequea por null y undefined
      // Nombre === null chequea solo por null

      (Nombre == null ||
        item.Nombre.toUpperCase().includes(Nombre.toUpperCase()))
         && (Activo == null || item.Activo == Activo));
    //ordenar
    Items = Items.sort( (a,b) => a.Nombre.toUpperCase() >
    b.Nombre.toUpperCase() ? 1 : -1 )
    // paginar con slice
    let RegistrosTotal = Items.length;
    let RegistroDesde = (pagina - 1) * 10;
    Items = Items.slice(RegistroDesde, RegistroDesde + 10);
    return of({ Items: Items, RegistrosTotal: RegistrosTotal });
  }

  // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  getById(Id: number) {
    let item: Articulo = Articulos.filter(x => x.IdArticulo === Id)[0];
    return of(item);
  }

  post(obj: Articulo) {
    obj.IdArticulo = new Date().getTime();
    obj.IdArticuloFamilia = +obj.IdArticuloFamilia; // convierto a numero, cuando se envia al servidor se hace automaticamente al enlazar las propiedades del modelo definido en el backend
    obj.Precio = +obj.Precio;
    obj.Stock = +obj.Stock;
    Articulos.push(obj);
    return of(obj);
  }
  put(Id: number, obj: Articulo) {
    let indice: number =0;
    let items = Articulos.filter(function(item, index) {
      if (item.IdArticulo === Id) {
        indice = index;
      }
    });
    obj.IdArticuloFamilia = +obj.IdArticuloFamilia; // convierto a número, cuando se envia al servidor se hace automáticamente al enlazar las propiedades del modelo definido en el backend
    obj.Precio = +obj.Precio;
    obj.Stock = +obj.Stock;
    Articulos[indice] = obj;
    return of(obj);
  }
  delete(Id: number) {
    let items = Articulos.filter(x => x.IdArticulo === Id);
    items[0].Activo = !items[0].Activo;
    return of(items[0]);
  }

}
