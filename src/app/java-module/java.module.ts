import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaRoutingModule } from './java-routing.module';
import { HomeModule } from '../home-module/home.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { NewComponent } from './components/new/new.component';
import { CommentairesComponent } from './components/commentaires/commentaires.component';
import { VariablesComponent } from './components/variables/variables.component';
import { OperateursComponent } from './components/operateurs/operateurs.component';
import { AfficherComponent } from './components/afficher/afficher.component';
import { ClavierComponent } from './components/clavier/clavier.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ConditionsAvanceesComponent } from './components/conditions-avancees/conditions-avancees.component';
import { BouclesComponent } from './components/boucles/boucles.component';
import { ConversionBoucleComponent } from './components/conversion-boucle/conversion-boucle.component';
import { MethodesComponent } from './components/methodes/methodes.component';
import { TableauxComponent } from './components/tableaux/tableaux.component';
import { TriABulleComponent } from './components/tri-a-bulle/tri-a-bulle.component';
import { StructogrammeComponent } from './components/structogramme/structogramme.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    NewComponent,
    CommentairesComponent,
    VariablesComponent,
    OperateursComponent,
    AfficherComponent,
    ClavierComponent,
    ConditionsComponent,
    ConditionsAvanceesComponent,
    BouclesComponent,
    ConversionBoucleComponent,
    MethodesComponent,
    TableauxComponent,
    TriABulleComponent,
    StructogrammeComponent
  ],
  imports: [
    CommonModule,
    JavaRoutingModule,
    HomeModule
  ]
})
export class JavaModule { }
