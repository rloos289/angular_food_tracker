import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template:  `
    <div>
      <h3>Add Food</h3>
      <form>
        <input #newName placeholder ="name"><br>
        <input #newDetails placeholder="details"><br>
        <input #newCalories placeholder ="calories" type="number"><br>
        <button (click)="
        addFood(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
        ">Add Food</button>
      </form>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodEmitter = new EventEmitter();
  addFood(name: string, details: string, calories: any) {
    //Why is typescript forcing calories to be a string?
    calories = parseInt(calories);
    var newFood = new Food (name, details, calories);
    console.log(newFood);
    this.newFoodEmitter.emit(newFood);
  }
}
