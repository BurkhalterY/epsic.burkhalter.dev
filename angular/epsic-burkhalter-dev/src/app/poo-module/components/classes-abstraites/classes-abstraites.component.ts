import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-classes-abstraites',
  templateUrl: './classes-abstraites.component.html',
  styleUrls: ['./classes-abstraites.component.css']
})
export class ClassesAbstraitesComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les classes abstraites");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
