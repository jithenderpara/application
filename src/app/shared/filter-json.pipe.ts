import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJson'
})
export class FilterJsonPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }

}
