import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
  <h1>Calorie Tracker</h1>
  <new-food
    (newFood)="addFood($event)"
  ></new-food>
  <food-list
    [childFoodList]="masterFoodList"
  ></food-list>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hamburger", "Meat", 500)
  ];

  addfood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
    console.log(this.masterFoodList);
  }
}
