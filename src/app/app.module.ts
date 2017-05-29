import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FlexmonsterPivot } from "./flexmonster.angular4";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FlexmonsterPivot ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
