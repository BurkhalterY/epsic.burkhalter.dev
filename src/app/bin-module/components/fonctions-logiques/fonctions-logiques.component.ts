import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-fonctions-logiques',
  templateUrl: './fonctions-logiques.component.html',
  styleUrls: ['./fonctions-logiques.component.css']
})
export class FonctionsLogiquesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les fonctions logiques");
  }

  ngOnInit(): void {
  }

}
