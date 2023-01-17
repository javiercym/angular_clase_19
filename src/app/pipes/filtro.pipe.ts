import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interface/pokeapi-response';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Pokemon[], pagina:number=0,textoBuscar:string='' ):  Pokemon[] {
    
    if (textoBuscar.length ==0)
      return value.splice(0,52);
    
    const filtrarPokemon = value.filter(poke => poke.name.includes(textoBuscar))
    

    return filtrarPokemon
  }

}
