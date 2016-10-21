import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
  <h1>Calorie Tracker</h1>
  <food-list
    [childFoodList]="masterFoodList"
  ></food-list>
  <new-food
    (newFoodEmitter)="addFood($event)"
  ></new-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hamburger", "Meat", 500)
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
    console.log(this.masterFoodList);
  }
}
