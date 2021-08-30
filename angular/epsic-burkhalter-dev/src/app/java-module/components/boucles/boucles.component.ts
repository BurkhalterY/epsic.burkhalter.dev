import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-boucles',
  templateUrl: './boucles.component.html',
  styleUrls: ['./boucles.component.css']
})
export class BouclesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les boucles");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
