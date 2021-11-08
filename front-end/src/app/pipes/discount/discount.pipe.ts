import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(discount: number, ...args: unknown[]): string
  {
    if(discount === 0) return "Free".toUpperCase();
    
    return "- "+discount+"%";
  }

}
