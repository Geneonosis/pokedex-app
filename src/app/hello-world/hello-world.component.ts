import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

export interface pokemon {
  position: number;
  name: string;
  pic: string;
}

// const apiClient = axios.create({

// })

let isLoaded: boolean = false;

// const POKEMON_DATA: pokemon[] = [
//   {position: 1, name: 'Bulbasaur', pic: '001'},
//   {position: 2, name: 'Ivysaur', pic: '002'},
//   {position: 3, name: 'Venusaur', pic: '003'},
//   {position: 4, name: 'Charmander', pic: '004'},
//   {position: 5, name: 'Charmeleon', pic: '005'},
//   {position: 6, name: 'Charizard', pic: '006'},
//   {position: 7, name: 'Squirtle', pic: '007'},
//   {position: 8, name: 'Wartortle', pic: '008'},
//   {position: 9, name: 'Blastoise', pic: '009'},
// ];

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
  public myDataArray: pokemon[] = [];
  count: number = 0;
  picNumber: string = '000';
  formDate: any;
  complete: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<RootObject>('https://pokeapi.co/api/v2/pokemon?limit=386').subscribe(data => {
      data.results.forEach(element => {
        this.count++;

        if(this.count.toString().length == 1){
          this.picNumber = '00' + this.count.toString();
        }else if(this.count.toString().length == 2){
          this.picNumber = '0' + this.count.toString();
        }else{
          this.picNumber = this.count.toString();
        }

        console.log("picNumber" + this.picNumber);

        this.myDataArray.push({position: this.count, name: element.name, pic: this.picNumber});
        console.log(this.myDataArray.length);
        if(this.myDataArray.length >= 10){
          console.log(this.myDataArray)
          this.complete = true;
        }
      });
    });

    console.log(this.myDataArray.length);

  }

}
