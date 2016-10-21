import { Pipe, PipeTransform  } from '@angular/core';
import { Food } from './food.model';

@Pipe ({
  name: "filteredCalories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {

  transform(input: Food[], foodfilter) {
    var output: Food[] = [];
      if (foodfilter === "low") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories <= 499) {
            output.push(input[i]);
          }
        }
      } else if (foodfilter === "high") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories >= 500) {
            output.push(input[i]);
        }
      }
    }
    return output;
  }
}
