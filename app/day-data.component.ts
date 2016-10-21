import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'day-data',
  template: `
    <div *ngIf="childFoodData.length >=1">
      <h3>Total calories today: {{ childFoodData | total }}</h3>
      <h3>Average calories per food item today: {{ childFoodData | average}}</h3>
    </div>
  `
})

export class DayDataComponent {
  @Input() childFoodData: Food[];

}
