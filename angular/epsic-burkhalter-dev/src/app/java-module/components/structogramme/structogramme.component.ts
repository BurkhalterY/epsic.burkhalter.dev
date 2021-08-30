import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-structogramme',
  templateUrl: './structogramme.component.html',
  styleUrls: ['./structogramme.component.css']
})
export class StructogrammeComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Symboles Nassi-Shneidermann");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
