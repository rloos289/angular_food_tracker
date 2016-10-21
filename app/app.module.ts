import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { NewFoodComponent } from './new-food.component'
import { ListFoodComponent } from './list-food.component'
import { EditFoodComponent } from './edit-food.component'
import { DayDataComponent } from './day-data.component'

import { CaloriesPipe } from './calories.pipe'
import { AveragePipe } from './average.pipe'
import { TotalPipe } from './total.pipe'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    ListFoodComponent,
    EditFoodComponent,
    DayDataComponent,
    CaloriesPipe,
    TotalPipe,
    AveragePipe
   ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
