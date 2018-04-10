import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdesc'
})
export class FilterdescPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return [];
    args = args.toLowerCase();
    return value.slice(0,140)
  }



}
