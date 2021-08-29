import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-structure-101',
  templateUrl: './structure-101.component.html',
  styleUrls: ['./structure-101.component.css']
})
export class Structure101Component implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Structure attendue pour le module 101");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
