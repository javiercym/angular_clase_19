import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PokeapiResponse, Pokemon } from '../interface/pokeapi-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = "https://pokeapi.co/api/v2/pokemon?limit=1500"

  constructor(private http:HttpClient) { }

  GetAll():Observable<Pokemon[]>{
    // return this.http.get<PokeapiResponse>(this.url);

    return this.http.get<PokeapiResponse>(this.url)
      .pipe(
        map( this.transformandoPokemon )
      )
  }
  private transformandoPokemon(resp: PokeapiResponse):Pokemon[]{
    
    const ListaPokemon:Pokemon[] = resp.results.map(poke=>{
    
      const urlArreglo = poke.url.split('/');
      const id = urlArreglo[6];
      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return{
        linkId:poke.url,
        name:poke.name, 
        image:imagen
      }
    })

    return ListaPokemon;
  }

}
