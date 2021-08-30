import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-requetes',
  templateUrl: './requetes.component.html',
  styleUrls: ['./requetes.component.css']
})
export class RequetesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Afficher une liste avec une requête");
  }

  ngOnInit(): void {
  }

}
