import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h1>Edit Food</h1>
      <div>
        <label>Enter food name:</label>
        <input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
      <div>
        <label>Enter food details:</label>
        <input [(ngModel)]="childSelectedFood.details">
      </div>
        <label>Enter food calories:</label>
        <input type="number" [(ngModel)]="childSelectedFood.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
