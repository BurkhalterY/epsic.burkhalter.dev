import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { TablesComponent } from './components/tables/tables.component';
import { RelationsComponent } from './components/relations/relations.component';
import { ValideSiComponent } from './components/valide-si/valide-si.component';
import { DonneesComponent } from './components/donnees/donnees.component';
import { ListesDeroulantesComponent } from './components/listes-deroulantes/listes-deroulantes.component';
import { FormulairesComponent } from './components/formulaires/formulaires.component';
import { BoutonsComponent } from './components/boutons/boutons.component';
import { VbaComponent } from './components/vba/vba.component';
import { RequetesComponent } from './components/requetes/requetes.component';
import { ControlZoneListeComponent } from './components/control-zone-liste/control-zone-liste.component';
import { EtiquettesComponent } from './components/etiquettes/etiquettes.component';
import { Access1Component } from './components/access1/access1.component';

const routes: Routes = [
  {
    path: 'access',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'relations', component: RelationsComponent },
      { path: 'valide_si', component: ValideSiComponent },
      { path: 'donnees', component: DonneesComponent },
      { path: 'listes_deroulantes', component: ListesDeroulantesComponent },
      { path: 'formulaires', component: FormulairesComponent },
      { path: 'boutons', component: BoutonsComponent },
      { path: 'vba', component: VbaComponent },
      { path: 'requetes', component: RequetesComponent },
      { path: 'control_zone_liste', component: ControlZoneListeComponent },
      { path: 'etiquettes', component: EtiquettesComponent },
      { path: 'access1', component: Access1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
