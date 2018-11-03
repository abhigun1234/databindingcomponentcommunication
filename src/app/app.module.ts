import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildbComponent } from './childb/childb.component';
import { ChildcComponent } from './childc/childc.component';
import { ChilddComponent } from './childd/childd.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildbComponent,
    ChildcComponent,
    ChilddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
