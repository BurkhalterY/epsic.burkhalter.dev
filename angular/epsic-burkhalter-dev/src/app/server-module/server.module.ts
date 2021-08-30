import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerRoutingModule } from './server-routing.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { DnsComponent } from './components/dns/dns.component';
import { AdComponent } from './components/ad/ad.component';
import { MmcComponent } from './components/mmc/mmc.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    DnsComponent,
    AdComponent,
    MmcComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule
  ]
})
export class ServerModule { }
