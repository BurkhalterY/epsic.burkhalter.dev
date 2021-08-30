import { Component, OnInit, Inject } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { DOCUMENT } from '@angular/common';
import { Tip } from '../../models/tip';
import { Category } from '../../models/category';
import * as json from '../../../../assets/data/tips.json';
import 'prismjs';

declare var Prism: any;
Prism.manual = true;

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  public tips: Tip[] = (json as any).default as Tip[];
  public filteredTips: Tip[] = this.tips;
  public categories: Category[] = [];
  public categoriesFilter: string[] = [];
  public search: string = "";

  constructor(private _titleService: Title, @Inject(DOCUMENT) private _document: HTMLDocument) {
    this._titleService.setTitle("Les tips à Yannis");
    this._document.getElementById("appFavicon")!.setAttribute("href", "/assets/icon/tips.ico");
  }

  ngOnInit(): void {
    for(let tip of this.tips){
      
      tip.categories.sort((a, b) => 0.5 - Math.random());

      for(let category of tip.categories){
        if(this.categories.filter(e => e.name == category).length == 0){
          this.categories.push({ name: category, count: 1 } as Category);
        } else {
          this.categories.find(e => e.name == category)!.count++;
        }
      }

      let el = document.createElement('span');
      el.innerHTML = tip.content;
      Prism.highlightAllUnder(el);
      tip.html = el.innerHTML;
    }
    this.categories.sort((a, b) => b.count - a.count);
    this.tips.sort((a, b) => 0.5 - Math.random());
    this.applySearch();
  }

  public toggleCategory(category: string): void {
    let index = this.categoriesFilter.indexOf(category);
    if(index == -1){
      this.categoriesFilter.push(category);
    } else {
      this.categoriesFilter.splice(index, 1);
    }
    this.applySearch();
  }

  public applySearch(): void {
    this.filteredTips = [];
    for(let tip of this.tips){
      let active = true;
      for(let categoryFilter of this.categoriesFilter){
        if(!tip.categories.includes(categoryFilter)){
          active = false;
        }
      }
      if(!(tip.title+tip.content+tip.categories.join()).toLowerCase().includes(this.search.toLowerCase())){
        active = false;
      }
      if(active){
        this.filteredTips.push(tip);
      }
    }
  }

}
