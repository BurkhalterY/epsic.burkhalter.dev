import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'java',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'new', component: NewComponent },
      { path: 'commentaires', component: CommentairesComponent },
      { path: 'variables', component: VariablesComponent },
      { path: 'operateurs', component: OperateursComponent },
      { path: 'afficher', component: AfficherComponent },
      { path: 'clavier', component: ClavierComponent },
      { path: 'conditions', component: ConditionsComponent },
      { path: 'conditions_avancees', component: ConditionsAvanceesComponent },
      { path: 'boucles', component: BouclesComponent },
      { path: 'conversion_boucle', component: ConversionBoucleComponent },
      { path: 'methodes', component: MethodesComponent },
      { path: 'tableaux', component: TableauxComponent },
      { path: 'tri_a_bulle', component: TriABulleComponent },
      { path: 'structogramme', component: StructogrammeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JavaRoutingModule { }
