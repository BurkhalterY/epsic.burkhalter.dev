import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NewsComponent } from './components/news/news.component';
import { CodeComponent } from './components/code/code.component';
import { TipsComponent } from './components/tips/tips.component';



@NgModule({
  declarations: [
    IndexComponent,
    NewsComponent,
    CodeComponent,
    TipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
    CodeComponent
  ]
})
export class HomeModule { }
