import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'list-food',
  template: `
  <div *ngIf="childFoodList.length >=1">
    <h3>List Your Food</h3>
    <select (change)="onChangeCalories($event.target.value)" class="filter">
      <label>Sort by Calories</label>
      <option>Sort by Calories</option>
      <option value="all">All</option>
      <option value="low"> Low calories</option>
      <option value="high"> High calories</option>
    </select>

    <div *ngFor="let currentFood of childFoodList | filteredCalories:selectedCalories">
      <p>Name: {{ currentFood.name }}</p>
      <p>Details: {{ currentFood.details }}</p>
      <p>Calories: {{ currentFood.calories }}</p>
      <button (click)="editButton(currentFood)">Edit</button>
      <hr>
    </div>
  </div>
  `
})

export class ListFoodComponent {
  @Input() childFoodList: Food[];
  @Input() childFoodSearch: Food[];
  @Output() editFoodSender = new EventEmitter();

  public selectedCalories: string = "";
  onChangeCalories(targetValue) {
  this.selectedCalories = targetValue;
  }

  editButton(foodToEdit: Food) {
    this.editFoodSender.emit(foodToEdit);
  }
}
