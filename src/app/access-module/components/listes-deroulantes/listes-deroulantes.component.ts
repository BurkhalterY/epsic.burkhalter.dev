import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-listes-deroulantes',
  templateUrl: './listes-deroulantes.component.html',
  styleUrls: ['./listes-deroulantes.component.css']
})
export class ListesDeroulantesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Listes déroulantes pour les FK");
  }

  ngOnInit(): void {
  }

}
