import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-visual-basic';

declare var Prism: any;

@Component({
  selector: 'app-control-zone-liste',
  templateUrl: './control-zone-liste.component.html',
  styleUrls: ['./control-zone-liste.component.css']
})
export class ControlZoneListeComponent implements OnInit {

  public Form_AfterInsert: string = "";
  public Btn_ajouter_email_Click: string = "";
  public Btn_selectionner_Click: string = "";
  public Btn_importer_email_Click: string = "";
  public Btn_supprimer_email_Click: string = "";
  public Form_AfterUpdate: string = "";
  public Btn_modifier_email_Click: string = "";

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)");
  }

  ngOnInit(): void {
    fetch(`/assets/code/access/Form_AfterInsert.vba`)
    .then(response => response.text())
    .then(data => {
      this.Form_AfterInsert = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Btn_ajouter_email_Click.vba`)
    .then(response => response.text())
    .then(data => {
      this.Btn_ajouter_email_Click = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Btn_selectionner_Click.vba`)
    .then(response => response.text())
    .then(data => {
      this.Btn_selectionner_Click = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Btn_importer_email_Click.vba`)
    .then(response => response.text())
    .then(data => {
      this.Btn_importer_email_Click = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Btn_supprimer_email_Click.vba`)
    .then(response => response.text())
    .then(data => {
      this.Btn_supprimer_email_Click = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Form_AfterUpdate.vba`)
    .then(response => response.text())
    .then(data => {
      this.Form_AfterUpdate = Prism.highlight(data, Prism.languages.vba);
    });

    fetch(`/assets/code/access/Btn_modifier_email_Click.vba`)
    .then(response => response.text())
    .then(data => {
      this.Btn_modifier_email_Click = Prism.highlight(data, Prism.languages.vba);
    });
  }

}
