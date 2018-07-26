import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custDateFormat'
})
export class CustDateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let myDate = days[value.getDay()];
    return myDate;
  }

}
