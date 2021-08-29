import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-hypertexte',
  templateUrl: './hypertexte.component.html',
  styleUrls: ['./hypertexte.component.css']
})
export class HypertexteComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les liens hypertextes");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
