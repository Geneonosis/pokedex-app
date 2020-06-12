import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  example: string = "Hello world";

  OnClick(): void {
    this.example = "other world";
  }

  ngOnInit(): void {
  }

}
