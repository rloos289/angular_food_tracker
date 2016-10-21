import { Pipe, PipeTransform  } from '@angular/core';
import { Food } from './food.model';

@Pipe ({
  name: "total",
  pure: false
})

export class TotalPipe implements PipeTransform {

  transform(input: Food[], foodfilter) {
    var output: number = 0;
    for (let i = 0; i < input.length; i++) {
        output += input[i].calories
    }
    return output;
  }
}
