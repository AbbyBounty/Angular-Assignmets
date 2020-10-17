import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';
import {FormsModule} from '@angular/forms';
import { Que4Component } from './que4/que4.component';
import { Que5Component } from './que5/que5.component'
@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    Que4Component,
    Que5Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
