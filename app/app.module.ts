import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { NewFoodComponent } from './new-food.component'
import { ListFoodComponent } from './list-food.component'
import { CaloriesPipe } from './calories.pipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    ListFoodComponent,
    CaloriesPipe
   ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
