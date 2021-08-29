import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PooRoutingModule } from './poo-routing.module';
import { HomeModule } from '../home-module/home.module';
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



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    ObjetComponent,
    ConstructeurComponent,
    EncapsulationComponent,
    HeritageComponent,
    PolymorphismeComponent,
    ClassesAbstraitesComponent,
    InterfacesComponent,
    FenetreComponent
  ],
  imports: [
    CommonModule,
    PooRoutingModule,
    HomeModule
  ]
})
export class PooModule { }
