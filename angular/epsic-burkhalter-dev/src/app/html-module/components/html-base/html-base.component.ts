import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-html-base',
  templateUrl: './html-base.component.html',
  styleUrls: ['./html-base.component.css']
})
export class HtmlBaseComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les bases du HTML");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
