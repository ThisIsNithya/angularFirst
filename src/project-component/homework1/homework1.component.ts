import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  amount:number = 100;
  exchangerate:number = 0.5;
  fromCurrency : string = 'USD';
  toCurrency : string = 'EURO';

  Toggle( from : string , to : string){
    this.fromCurrency = to;
    this.toCurrency = from;
  }
}
