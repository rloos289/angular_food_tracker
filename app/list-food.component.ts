import { Component, Input, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <select (change)="onChangeCalories($event.target.value)" class="filter">
    <label>Sort by Calories</label>
    <option value="low"> Low calories</option>
    <option value="high"> High calories</option>
  </select>

  <div *ngFor="let currentFood of childFoodList | filteredCalories:selectedCalories">
    <p>Name: {{ currentFood.name }}</p>
    <p>Details: {{ currentFood.description }}</p>
    <p>Calories: {{ currentFood.calories }}</p>
    <hr>
  </div>
  `
})

export class ListFoodComponent {
  @Input() childFoodList: Food[];
  @Input() childFoodSearch: Food[];

  public selectedCalories: string = "";
  onChangeCalories(targetValue) {
  this.selectedCalories = targetValue;
}

}
