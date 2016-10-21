import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { NewFoodComponent } from './new-food.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent
   ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
