import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ToolsRoutingModule } from './tools-routing.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { Base64Component } from './components/base64/base64.component';
import { BasesComponent } from './components/bases/bases.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    Base64Component,
    BasesComponent,
    PasswordGeneratorComponent,
    QrcodeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
