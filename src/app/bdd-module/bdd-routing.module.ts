import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { FkTheorieComponent } from './components/fk-theorie/fk-theorie.component';
import { InstallMysqlComponent } from './components/install-mysql/install-mysql.component';
import { PhpmyadminComponent } from './components/phpmyadmin/phpmyadmin.component';
import { FkComponent } from './components/fk/fk.component';
import { SqlSelectComponent } from './components/sql-select/sql-select.component';
import { SqlInnerJoinComponent } from './components/sql-inner-join/sql-inner-join.component';

const routes: Routes = [
  {
    path: 'bdd',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'fk_theorie', component: FkTheorieComponent },
      { path: 'install_mysql', component: InstallMysqlComponent },
      { path: 'phpmyadmin', component: PhpmyadminComponent },
      { path: 'fk', component: FkComponent },
      { path: 'sql_select', component: SqlSelectComponent },
      { path: 'sql_inner_join', component: SqlInnerJoinComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BddRoutingModule { }
