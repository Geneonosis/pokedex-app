import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getPokemon(): Observable<Pokemon[]>{
    console.log("hello world");
    console.log(this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=10'));
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=010');
  }
}

export interface Pokemon {
  position: number;
  name: string;
  pic: string;
}
