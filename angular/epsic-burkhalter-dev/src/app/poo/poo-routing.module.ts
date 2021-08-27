import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetComponent } from './components/objet/objet.component';

const routes: Routes = [
  {
    path: 'poo',
    children: [
      { path: 'objet', component: ObjetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PooRoutingModule { }
