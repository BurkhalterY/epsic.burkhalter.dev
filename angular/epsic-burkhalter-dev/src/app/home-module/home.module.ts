import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [
    IndexComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
