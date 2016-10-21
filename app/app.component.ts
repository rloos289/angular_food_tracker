import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>Daily Calorie Counter</h1>
    <div class='col-md-4'>
      <list-food
        [childFoodList]="masterFoodList"
        [childFoodSearch]="masterFoodList"
        (editFoodSender)="showDetails($event)"
      ></list-food>
    </div>
    <div class='col-md-4'>
      <new-food
        (newFoodEmitter)="addFood($event)"
      ></new-food>
      <edit-food
        [childSelectedFood]="selectedFood"
        (doneClickedSender)="finishedEditing()"
      ></edit-food>
    </div>
    <div class='col-md-4'>
      <day-data
        [childFoodData]="masterFoodList"
      ></day-data>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hamburger", "Meat", 700),
    new Food("Salad", "Leafy", 20),
    new Food("Ice Cream", "Creamy", 600),
    new Food("Apple", "Fruity", 150),
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
  this.selectedFood = clickedFood;
  }

  finishedEditing() {
  this.selectedFood = null;
  }
}
