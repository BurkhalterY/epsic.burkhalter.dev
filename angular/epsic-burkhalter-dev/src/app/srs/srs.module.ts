import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrsRoutingModule } from './srs-routing.module';
import { BaseComponent } from './components/base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    SrsRoutingModule
  ]
})
export class SrsModule { }
