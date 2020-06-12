import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface pokemon {
  position: number;
  name: string;
  pic: string;
}

// const apiClient = axios.create({

// })

let isLoaded: boolean = false;

const POKEMON_DATA: pokemon[] = [
  // {position: 1, name: 'Bulbasaur', pic: '001'},
  // {position: 2, name: 'Ivysaur', pic: '002'},
  // {position: 3, name: 'Venusaur', pic: '003'},
  // {position: 4, name: 'Charmander', pic: '004'},
  // {position: 5, name: 'Charmeleon', pic: '005'},
  // {position: 6, name: 'Charizard', pic: '006'},
  // {position: 7, name: 'Squirtle', pic: '007'},
  // {position: 8, name: 'Wartortle', pic: '008'},
  // {position: 9, name: 'Blastoise', pic: '009'},
];

interface RootObject {
  results: Result[];
}

interface Result {
  name: string;
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  displayedColumns: string[] = ['position','name','pic'];
  myDataArray = POKEMON_DATA;
  count: number = 0;
  picNumber: string = '000';
  formDate: any;
  isLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<RootObject>('https://pokeapi.co/api/v2/pokemon?limit=010').subscribe(data => {
      data.results.forEach(element => {
        this.count++;
        POKEMON_DATA.push({position: this.count, name: element.name, pic: '001'});
      });
    });

    console.log(POKEMON_DATA)
    this.isLoaded = true;
  }

}
