import { Component, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <p>Name: {{ currentFood.name }}</p>
    <p>Details: {{ currentFood.description }}</p>
    <p>Calories: {{ currentFood.calories }}</p>
    <hr>
  </div>
  `
})

export class ListFoodComponent {
  @Input() childFoodList: Food[];
}
