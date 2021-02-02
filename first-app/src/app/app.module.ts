import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  /* register the UI entities of the module. ie., Component, Directive & Pipe */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    ProductsComponent
  ],
  /* register the other modules that this module depends on */
  imports: [
    BrowserModule
    , FormsModule
  ],
  /* register the non-UI entites. ie., Service */
  providers: [],
  
  /* top most component in the UI */
  bootstrap: [AppComponent]
})
export class AppModule { }
