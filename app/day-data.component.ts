import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'day-data',
  template: `
    <div *ngIf="childFoodData.length >=1">
      <h3>Daily Data</h3>
      <h5>Total calories today: {{ childFoodData | total }}</h5>
      <h5>Average calories per food item today: {{ childFoodData | average}}</h5>
    </div>
  `
})

export class DayDataComponent {
  @Input() childFoodData: Food[];

}
