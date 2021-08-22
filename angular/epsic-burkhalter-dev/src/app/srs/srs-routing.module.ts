import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';


const routes: Routes = [
  {
    path: 'srs',
    component: BaseComponent,
    children: [
      { path: '', component: BaseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SrsRoutingModule { }
