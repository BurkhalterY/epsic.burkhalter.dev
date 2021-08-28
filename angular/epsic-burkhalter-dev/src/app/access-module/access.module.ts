import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './access-routing.module';
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



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    TablesComponent,
    RelationsComponent,
    ValideSiComponent,
    DonneesComponent,
    ListesDeroulantesComponent,
    FormulairesComponent,
    BoutonsComponent,
    VbaComponent,
    RequetesComponent,
    ControlZoneListeComponent,
    EtiquettesComponent,
    Access1Component
  ],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
