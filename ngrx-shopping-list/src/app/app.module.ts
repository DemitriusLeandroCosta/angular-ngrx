import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
