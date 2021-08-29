import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BddRoutingModule } from './bdd-routing.module';
import { HomeModule } from '../home-module/home.module';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { FkTheorieComponent } from './components/fk-theorie/fk-theorie.component';
import { InstallMysqlComponent } from './components/install-mysql/install-mysql.component';
import { PhpmyadminComponent } from './components/phpmyadmin/phpmyadmin.component';
import { FkComponent } from './components/fk/fk.component';
import { SqlSelectComponent } from './components/sql-select/sql-select.component';
import { SqlInnerJoinComponent } from './components/sql-inner-join/sql-inner-join.component';



@NgModule({
  declarations: [
    BaseComponent,
    IndexComponent,
    FkTheorieComponent,
    InstallMysqlComponent,
    PhpmyadminComponent,
    FkComponent,
    SqlSelectComponent,
    SqlInnerJoinComponent,
  ],
  imports: [
    CommonModule,
    BddRoutingModule,
    HomeModule
  ]
})
export class BddModule { }
