import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <div class='col-md-12'>
      <h1>Daily Calorie Counter</h1>
    </div>
    <div class='col-md-4'>
      <list-food
        [childFoodList]="masterFoodList"
        [childFoodSearch]="masterFoodList"
        (editFoodSender)="showDetails($event)"
      ></list-food>
      <img src="./../img/burgie.png" alt="burgie">
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
      <img src="./../img/burgie.png" alt="burgie">

    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
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
