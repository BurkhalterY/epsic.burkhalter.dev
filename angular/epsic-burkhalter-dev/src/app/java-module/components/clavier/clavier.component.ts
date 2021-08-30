import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Lire les entrées clavier");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
