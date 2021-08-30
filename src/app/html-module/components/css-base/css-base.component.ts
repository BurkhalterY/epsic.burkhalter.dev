import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-css-base',
  templateUrl: './css-base.component.html',
  styleUrls: ['./css-base.component.css']
})
export class CssBaseComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les bases du CSS");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
