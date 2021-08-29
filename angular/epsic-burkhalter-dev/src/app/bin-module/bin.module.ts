import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BinRoutingModule } from './bin-routing.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { NToB10Component } from './components/n-to-b10/n-to-b10.component';
import { B10ToNComponent } from './components/b10-to-n/b10-to-n.component';
import { VocComponent } from './components/voc/voc.component';
import { BinHexComponent } from './components/bin-hex/bin-hex.component';
import { GrayComponent } from './components/gray/gray.component';
import { BcdComponent } from './components/bcd/bcd.component';
import { XParmiNComponent } from './components/x-parmi-n/x-parmi-n.component';
import { AsciiComponent } from './components/ascii/ascii.component';
import { UnicodeUtf8Component } from './components/unicode-utf8/unicode-utf8.component';
import { EanComponent } from './components/ean/ean.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component';
import { AdditionComponent } from './components/addition/addition.component';
import { NegativComponent } from './components/negativ/negativ.component';
import { FloatComponent } from './components/float/float.component';
import { FonctionsLogiquesComponent } from './components/fonctions-logiques/fonctions-logiques.component';
import { Partie3Component } from './components/partie3/partie3.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    NToB10Component,
    B10ToNComponent,
    VocComponent,
    BinHexComponent,
    GrayComponent,
    BcdComponent,
    XParmiNComponent,
    AsciiComponent,
    UnicodeUtf8Component,
    EanComponent,
    QrCodeComponent,
    ConvertisseurComponent,
    AdditionComponent,
    NegativComponent,
    FloatComponent,
    FonctionsLogiquesComponent,
    Partie3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BinRoutingModule
  ]
})
export class BinModule { }
