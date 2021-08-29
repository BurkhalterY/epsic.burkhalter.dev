import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-css-marges',
  templateUrl: './css-marges.component.html',
  styleUrls: ['./css-marges.component.css']
})
export class CssMargesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les marges");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
