import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-calcul-sous-reseaux',
  templateUrl: './calcul-sous-reseaux.component.html',
  styleUrls: ['./calcul-sous-reseaux.component.css']
})
export class CalculSousReseauxComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Calculer les sous-réseaux");
  }

  ngOnInit(): void {
  }

}
