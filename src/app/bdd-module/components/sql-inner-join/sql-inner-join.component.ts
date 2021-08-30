import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-sql';

declare var Prism: any;

@Component({
  selector: 'app-sql-inner-join',
  templateUrl: './sql-inner-join.component.html',
  styleUrls: ['./sql-inner-join.component.css']
})
export class SqlInnerJoinComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Requêtes sur plusieurs tables");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
