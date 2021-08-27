import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Équipements réseaux");
  }

  ngOnInit(): void {
  }

}
