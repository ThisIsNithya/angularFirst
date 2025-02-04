import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyexhange'
})
export class CurrencyexhangePipe implements PipeTransform {

  transform(amount: number, exchangeRate: number): number {
      
    if (amount && exchangeRate) {
        return amount * exchangeRate; 
      }
    return amount;
  }

}
