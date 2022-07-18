import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './models/film';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Film[], ricercaFilm : string): Film[] {
    return value.filter(film => film.title.toLowerCase().includes(ricercaFilm.toLowerCase()));
  }

}
