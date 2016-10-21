import { Pipe, PipeTransform  } from '@angular/core';
import { Food } from './food.model';

@Pipe ({
  name: "total",
  pure: false
})

export class TotalPipe implements PipeTransform {

  transform(input: Food[], foodfilter) {
    var totalCalories: number = 0;
    for (let i = 0; i < input.length; i++) {
        totalCalories += input[i].calories;
    }
    return totalCalories;
  }
}
