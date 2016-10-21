import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template:  `
    <div>
      <label>Food Information</label>
      <input #name placeholder="name">
      <input #details placeholder="details">
      <input #calories placeholder="calories">
      <button (click)="addFood(name.value, details.value, calories.value); name.value=''; details.value=''; calories.value='';">Add Food</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodEmitter = new EventEmitter();
  addFood(name: string, details: string, calories: number ) {
    var newFood = new Food (name, details, calories);
    this.newFoodEmitter.emit(newFood);
  }
}
