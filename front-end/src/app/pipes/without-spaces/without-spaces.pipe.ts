import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutSpaces'
})
export class WithoutSpacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]):  string
  {
    return value.replace(/\s/g, "");
  }

}
