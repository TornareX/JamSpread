
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
