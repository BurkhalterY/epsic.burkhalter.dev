import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { DnsComponent } from './components/dns/dns.component';
import { AdComponent } from './components/ad/ad.component';
import { MmcComponent } from './components/mmc/mmc.component';

const routes: Routes = [
  {
    path: 'server',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'dns', component: DnsComponent },
      { path: 'ad', component: AdComponent },
      { path: 'mmc', component: MmcComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
