import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeDate'
})
export class HumanizeDatePipe implements PipeTransform {
  // Gets ssystem date time format return humanizable
  transform(value: any, args?: any): any {
    const date = new Date(value);
    const val = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
    return val;
  }

}
