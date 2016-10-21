import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template:  `
    <div class='new-food'>
      <h3>Add Food</h3>
      <input #newName placeholder ="name"><br>
      <input #newDetails placeholder="details"><br>
      <input #newCalories placeholder ="calories" type="number"><br>
      <button (click)="
      addFood(newName.value, newDetails.value, newCalories.value);
      newName.value='';
      newDetails.value='';
      newCalories.value='';
      ">Add Food</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodEmitter = new EventEmitter();
  addFood(name: string, details: string, calories: any) {
    //Why is typescript forcing calories to be a string?
    calories = parseInt(calories);
    if(name && details && calories) {
      var newFood = new Food (name, details, calories);
      this.newFoodEmitter.emit(newFood);
    } else {
      alert('please fill out all fields');
    }

  }
}
