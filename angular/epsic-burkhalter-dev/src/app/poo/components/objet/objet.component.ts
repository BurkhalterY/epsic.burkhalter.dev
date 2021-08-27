import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  public objet: string[] = new Array(3).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Qu'est-ce qu'un objet ?");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.objet.length; i++){
      fetch(`/assets/code/poo/objet${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.objet[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
