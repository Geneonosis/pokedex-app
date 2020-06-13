import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PokemonResolverService } from './pokemon-resolver.service';


const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent,
    resolve: { pokemon: PokemonResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
