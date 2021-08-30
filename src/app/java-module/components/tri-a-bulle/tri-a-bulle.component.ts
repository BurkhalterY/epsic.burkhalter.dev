import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-tri-a-bulle',
  templateUrl: './tri-a-bulle.component.html',
  styleUrls: ['./tri-a-bulle.component.css']
})
export class TriABulleComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Tri à bulle");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
