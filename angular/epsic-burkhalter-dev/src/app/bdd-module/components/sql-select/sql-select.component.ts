import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-sql';

declare var Prism: any;

@Component({
  selector: 'app-sql-select',
  templateUrl: './sql-select.component.html',
  styleUrls: ['./sql-select.component.css']
})
export class SqlSelectComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Récuperer des données avec des requêtes SQL");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
