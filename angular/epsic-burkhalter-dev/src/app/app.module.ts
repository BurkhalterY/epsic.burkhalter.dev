import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-module/home.module';
import { NetworkModule } from './network-module/network.module';
import { PooModule } from './poo-module/poo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NetworkModule,
    PooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
