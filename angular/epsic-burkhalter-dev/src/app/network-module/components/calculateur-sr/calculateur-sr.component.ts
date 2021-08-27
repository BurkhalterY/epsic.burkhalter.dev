import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-calculateur-sr',
  templateUrl: './calculateur-sr.component.html',
  styleUrls: ['./calculateur-sr.component.css']
})
export class CalculateurSrComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Calculateur de sous-réseaux");
  }

  ngOnInit(): void {
  }

}
