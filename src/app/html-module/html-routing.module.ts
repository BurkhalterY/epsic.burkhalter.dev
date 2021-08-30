import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'html',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'site_web', component: SiteWebComponent },
      { path: 'html_base', component: HtmlBaseComponent },
      { path: 'types_balises', component: TypesBalisesComponent },
      { path: 'structure_101', component: Structure101Component },
      { path: 'hypertexte', component: HypertexteComponent },
      { path: 'image', component: ImageComponent },
      { path: 'liste', component: ListeComponent },
      { path: 'table', component: TableComponent },
      { path: 'form', component: FormComponent },
      { path: 'iframe', component: IframeComponent },
      { path: 'css_base', component: CssBaseComponent },
      { path: 'css_marges', component: CssMargesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
