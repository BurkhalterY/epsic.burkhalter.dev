import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NewsComponent } from './components/news/news.component';
import { CodeComponent } from './components/code/code.component';



@NgModule({
  declarations: [
    IndexComponent,
    NewsComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    CodeComponent
  ]
})
export class HomeModule { }
