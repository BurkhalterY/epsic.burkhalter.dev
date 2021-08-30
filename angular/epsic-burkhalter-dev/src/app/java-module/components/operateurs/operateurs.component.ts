import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-operateurs',
  templateUrl: './operateurs.component.html',
  styleUrls: ['./operateurs.component.css']
})
export class OperateursComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les opérateurs");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
