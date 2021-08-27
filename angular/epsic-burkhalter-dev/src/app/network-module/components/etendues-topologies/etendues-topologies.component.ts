import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-etendues-topologies',
  templateUrl: './etendues-topologies.component.html',
  styleUrls: ['./etendues-topologies.component.css']
})
export class EtenduesTopologiesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Étendues et topologies des réseaux");
  }

  ngOnInit(): void {
  }

}
