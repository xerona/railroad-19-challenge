import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let modified = value.split('');
    modified[0] = modified[0].toUpperCase();
    return modified.join('');
  }

}
