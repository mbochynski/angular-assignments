import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, prop: string, args?: any): any {
    if (value.length === 0) {
      return value;
    }

    return value.filter(val => val[prop] === filterString);
  }

}
