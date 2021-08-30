import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Ajouter des boutons aux formulaires");
  }

  ngOnInit(): void {
  }

}
