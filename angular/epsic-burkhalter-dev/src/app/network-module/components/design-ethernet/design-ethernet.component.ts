import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-design-ethernet',
  templateUrl: './design-ethernet.component.html',
  styleUrls: ['./design-ethernet.component.css']
})
export class DesignEthernetComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Design Ethernet (Projet Mediatis)");
  }

  ngOnInit(): void {
  }

}
