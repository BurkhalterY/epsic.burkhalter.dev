import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlRoutingModule } from './html-routing.module';
import { HomeModule } from '../home-module/home.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { SiteWebComponent } from './components/site-web/site-web.component';
import { HtmlBaseComponent } from './components/html-base/html-base.component';
import { TypesBalisesComponent } from './components/types-balises/types-balises.component';
import { Structure101Component } from './components/structure-101/structure-101.component';
import { HypertexteComponent } from './components/hypertexte/hypertexte.component';
import { ImageComponent } from './components/image/image.component';
import { ListeComponent } from './components/liste/liste.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { CssBaseComponent } from './components/css-base/css-base.component';
import { CssMargesComponent } from './components/css-marges/css-marges.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    SiteWebComponent,
    HtmlBaseComponent,
    TypesBalisesComponent,
    Structure101Component,
    HypertexteComponent,
    ImageComponent,
    ListeComponent,
    TableComponent,
    FormComponent,
    IframeComponent,
    CssBaseComponent,
    CssMargesComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    HomeModule
  ]
})
export class HtmlModule { }
