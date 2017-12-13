import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CapitalPipe } from './capital.pipe';
import { DomSecurePipe } from './dom-secure.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalPipe,
    DomSecurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
