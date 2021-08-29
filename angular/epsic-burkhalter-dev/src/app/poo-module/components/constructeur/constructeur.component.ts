import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-constructeur',
  templateUrl: './constructeur.component.html',
  styleUrls: ['./constructeur.component.css']
})
export class ConstructeurComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les constructeurs");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
