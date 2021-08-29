import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-polymorphisme',
  templateUrl: './polymorphisme.component.html',
  styleUrls: ['./polymorphisme.component.css']
})
export class PolymorphismeComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Le polymorphisme");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
