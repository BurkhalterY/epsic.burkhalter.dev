import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs/components/prism-visual-basic';

declare var Prism: any;

@Component({
  selector: 'app-control-zone-liste',
  templateUrl: './control-zone-liste.component.html',
  styleUrls: ['./control-zone-liste.component.css']
})
export class ControlZoneListeComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
