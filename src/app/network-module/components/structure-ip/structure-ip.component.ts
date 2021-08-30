import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-structure-ip',
  templateUrl: './structure-ip.component.html',
  styleUrls: ['./structure-ip.component.css']
})
export class StructureIpComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Structure d'une adresse IP");
  }

  ngOnInit(): void {
  }

}
