import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'bin',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'n_to_10', component: NToB10Component },
      { path: '10_to_n', component: B10ToNComponent },
      { path: 'voc', component: VocComponent },
      { path: 'bin_hex', component: BinHexComponent },
      { path: 'gray', component: GrayComponent },
      { path: 'bcd', component: BcdComponent },
      { path: 'x_parmi_n', component: XParmiNComponent },
      { path: 'ascii', component: AsciiComponent },
      { path: 'unicode_utf8', component: UnicodeUtf8Component },
      { path: 'ean', component: EanComponent },
      { path: 'qr_code', component: QrCodeComponent },
      { path: 'convertisseur', component: ConvertisseurComponent },
      { path: 'addition', component: AdditionComponent },
      { path: 'negativ', component: NegativComponent },
      { path: 'float', component: FloatComponent },
      { path: 'fonctions_logiques', component: FonctionsLogiquesComponent },
      { path: 'partie3', component: Partie3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BinRoutingModule { }
