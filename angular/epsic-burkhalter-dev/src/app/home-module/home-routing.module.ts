import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { TipsComponent } from './components/tips/tips.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'tips', component: TipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
