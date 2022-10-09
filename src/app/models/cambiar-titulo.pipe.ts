import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CambiarTitulo'
})
export class CambiarTituloPipe implements PipeTransform {

  transform(value: string): string {
    let aux = '';
    for(let i = 0; i < value.length; i++) {
      aux += i % 2 ? value[i].toUpperCase() : value[i].toLowerCase();
    }
    return aux;
  }

}
