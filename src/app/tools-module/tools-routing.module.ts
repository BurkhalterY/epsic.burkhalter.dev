import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { BasesComponent } from './components/bases/bases.component';
import { Base64Component } from './components/base64/base64.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

const routes: Routes = [
  {
    path: 'tools',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'bases', component: BasesComponent },
      { path: 'base64', component: Base64Component },
      { path: 'passgen', component: PasswordGeneratorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
