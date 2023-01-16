import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeapiResponse } from '../interface/pokeapi-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

  constructor(private http:HttpClient) { }

  // GetAll():Observable<string[]>{
  //   return this.http.get<any>(this.url);
  // }

  GetAll():Observable<PokeapiResponse>{
    return this.http.get<PokeapiResponse>(this.url);
  }

}
