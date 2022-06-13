import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { testComponent } from './0613.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ testComponent ],
  bootstrap:    [ testComponent ]
})
export class AppModule { }
