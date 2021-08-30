import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-donnees',
  templateUrl: './donnees.component.html',
  styleUrls: ['./donnees.component.css']
})
export class DonneesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Ajouter des données");
  }

  ngOnInit(): void {
  }

}
