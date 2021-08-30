import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-conditions-avancees',
  templateUrl: './conditions-avancees.component.html',
  styleUrls: ['./conditions-avancees.component.css']
})
export class ConditionsAvanceesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les conditions avancées");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
