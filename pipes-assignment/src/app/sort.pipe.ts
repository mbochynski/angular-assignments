import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, field: string, args?: any): any {
    return value.sort((a, b) => {
      return a[field].localeCompare(b[field]);
    });
  }

}
