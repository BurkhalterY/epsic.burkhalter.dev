import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'network',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'materiel', component: MaterielComponent },
      { path: 'etendues_topologies', component: EtenduesTopologiesComponent },
      { path: 'modele_osi', component: ModeleOsiComponent },
      { path: 'supports_transmission', component: SupportsTransmissionComponent },
      { path: 'classes_ip', component: ClassesIpComponent },
      { path: 'structure_ip', component: StructureIpComponent },
      { path: 'calcul_sous_reseaux', component: CalculSousReseauxComponent },
      { path: 'design_ethernet', component: DesignEthernetComponent },
      { path: 'calculateur_sr', component: CalculateurSrComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
