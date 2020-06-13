import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService, Pokemon } from 'src/app/app.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<Pokemon[]>{

  constructor(private appService: AppService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Pokemon[]> | Promise<Pokemon[]> | Pokemon[] {
      return this.appService.getPokemon();
    }
}
