import { STATSIG, StClientLibModule } from 'st-client-lib';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Statsig from 'statsig-js';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StClientLibModule],
  providers: [{ provide: STATSIG, useValue: Statsig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
