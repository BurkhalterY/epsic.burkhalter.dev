import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-conversion-boucle',
  templateUrl: './conversion-boucle.component.html',
  styleUrls: ['./conversion-boucle.component.css']
})
export class ConversionBoucleComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion d'un for en while et inversement");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
