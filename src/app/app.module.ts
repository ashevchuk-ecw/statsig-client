import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StClientLibModule } from 'st-client-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StClientLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
