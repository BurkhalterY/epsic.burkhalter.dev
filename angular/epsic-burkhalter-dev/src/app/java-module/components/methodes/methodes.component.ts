import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-methodes',
  templateUrl: './methodes.component.html',
  styleUrls: ['./methodes.component.css']
})
export class MethodesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les méthodes");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
