import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolsRoutingModule } from './tools-routing.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { Base64Component } from './components/base64/base64.component';
import { BasesComponent } from './components/bases/bases.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    Base64Component,
    BasesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
