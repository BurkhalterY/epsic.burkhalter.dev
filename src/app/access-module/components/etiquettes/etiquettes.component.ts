import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-etiquettes',
  templateUrl: './etiquettes.component.html',
  styleUrls: ['./etiquettes.component.css']
})
export class EtiquettesComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Imprimer des étiquettes");
  }

  ngOnInit(): void {
  }

}
