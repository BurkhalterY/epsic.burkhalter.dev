import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NetworkRoutingModule } from './network-routing.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { MaterielComponent } from './components/materiel/materiel.component';
import { EtenduesTopologiesComponent } from './components/etendues-topologies/etendues-topologies.component';
import { ModeleOsiComponent } from './components/modele-osi/modele-osi.component';
import { SupportsTransmissionComponent } from './components/supports-transmission/supports-transmission.component';
import { ClassesIpComponent } from './components/classes-ip/classes-ip.component';
import { StructureIpComponent } from './components/structure-ip/structure-ip.component';
import { CalculSousReseauxComponent } from './components/calcul-sous-reseaux/calcul-sous-reseaux.component';
import { DesignEthernetComponent } from './components/design-ethernet/design-ethernet.component';
import { CalculateurSrComponent } from './components/calculateur-sr/calculateur-sr.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    MaterielComponent,
    EtenduesTopologiesComponent,
    ModeleOsiComponent,
    SupportsTransmissionComponent,
    ClassesIpComponent,
    StructureIpComponent,
    CalculSousReseauxComponent,
    DesignEthernetComponent,
    CalculateurSrComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NetworkRoutingModule
  ]
})
export class NetworkModule { }
