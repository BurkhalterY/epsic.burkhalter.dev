import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Créer un formulaire");
  }

  ngOnInit(): void {
  }

}
