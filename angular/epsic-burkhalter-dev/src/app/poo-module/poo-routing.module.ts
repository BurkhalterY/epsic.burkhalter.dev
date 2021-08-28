import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { ObjetComponent } from './components/objet/objet.component';
import { ConstructeurComponent } from './components/constructeur/constructeur.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { HeritageComponent } from './components/heritage/heritage.component';
import { PolymorphismeComponent } from './components/polymorphisme/polymorphisme.component';
import { ClassesAbstraitesComponent } from './components/classes-abstraites/classes-abstraites.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { FenetreComponent } from './components/fenetre/fenetre.component';

const routes: Routes = [
  {
    path: 'poo',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'objet', component: ObjetComponent },
      { path: 'constructeur', component: ConstructeurComponent },
      { path: 'encapsulation', component: EncapsulationComponent },
      { path: 'heritage', component: HeritageComponent },
      { path: 'polymorphisme', component: PolymorphismeComponent },
      { path: 'classes_abstraites', component: ClassesAbstraitesComponent },
      { path: 'interfaces', component: InterfacesComponent },
      { path: 'fenetre', component: FenetreComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PooRoutingModule { }
