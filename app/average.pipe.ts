import { Pipe, PipeTransform  } from '@angular/core';
import { Food } from './food.model';

@Pipe ({
  name: "average",
  pure: false
})

export class AveragePipe implements PipeTransform {

  transform(input: Food[], foodfilter) {
    var output: number = 0;
    for (let i = 0; i < input.length; i++) {
        output += input[i].calories;
    }
    output = output/input.length;
    return output;
  }
}
