import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {

  fruit:string = '';
  fruitName:string='';

  selectedFruits: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  Submit( fruit : string){
    this.fruitName = fruit;
    this.fruit = '';
  }

  handleSelectedFruits(selectedFruits: string[]): void {
    this.selectedFruits = selectedFruits;
  }

}
