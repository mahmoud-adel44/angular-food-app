import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testless'
})
export class TestlessPipe implements PipeTransform {

  transform(title:string): unknown {
    return title.slice(0,10)+'...';
  }

}
