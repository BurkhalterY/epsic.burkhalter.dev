import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-modele-osi',
  templateUrl: './modele-osi.component.html',
  styleUrls: ['./modele-osi.component.css']
})
export class ModeleOsiComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Modèle OSI");
  }

  ngOnInit(): void {
  }

}
