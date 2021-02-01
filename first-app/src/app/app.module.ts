import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  /* register the UI entities of the module. ie., Component, Directive & Pipe */
  declarations: [
    AppComponent
  ],
  /* register the other modules that this module depends on */
  imports: [
    BrowserModule
  ],
  /* register the non-UI entites. ie., Service */
  providers: [],
  
  /* top most component in the UI */
  bootstrap: [AppComponent]
})
export class AppModule { }
