import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-homework2child1',
  templateUrl: './homework2child1.component.html',
  styleUrls: ['./homework2child1.component.css']
})
export class Homework2child1Component implements OnInit {

  @Input() childData: string = '';
  fruitList: string[] = []; 
  selectedFruits: string[] = [];
  @Output() selectedFruitsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

   constructor() {
    
   }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['childData']) {
      const prevValue = changes['childData'].previousValue;
      const currentValue = changes['childData'].currentValue;
      if(prevValue != currentValue  && currentValue != ''){
        this.fruitList.push(this.childData); 
      }
    }
  }

  OnSelectFruits(fruit:string, event: any){
    if (event.target.checked) {
      this.selectedFruits.push(fruit);
    }else{
      this.selectedFruits = this.selectedFruits.filter(item => item !== fruit);
    }
    this.selectedFruitsChange.emit(this.selectedFruits);
    
  }

}
