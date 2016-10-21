import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
  <h1>Calorie Tracker</h1>
  <list-food
    [childFoodList]="masterFoodList"
    [childFoodSearch]="masterFoodList"
    (editFoodSender)="showDetails($event)"
  ></list-food>
  <edit-food
    [childSelectedFood]="selectedFood"
    (doneClickedSender)="finishedEditing()"
  ></edit-food>
    <div>
  <new-food
    (newFoodEmitter)="addFood($event)"
  ></new-food>
  <day-data
    [childFoodData]="masterFoodList"
  ></day-data>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hamburger", "Meat", 700),
    new Food("Salad", "Leafy", 20),
    new Food("Ice Cream", "Creamy", 600),
    new Food("Apple", "Fruity", 150)
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
    console.log(this.masterFoodList);
  }

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
  this.selectedFood = clickedFood;
  }

  finishedEditing() {
  this.selectedFood = null;
  }
}
