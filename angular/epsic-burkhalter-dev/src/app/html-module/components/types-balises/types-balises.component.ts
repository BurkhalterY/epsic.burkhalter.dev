import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-types-balises',
  templateUrl: './types-balises.component.html',
  styleUrls: ['./types-balises.component.css']
})
export class TypesBalisesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les types de balises");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
