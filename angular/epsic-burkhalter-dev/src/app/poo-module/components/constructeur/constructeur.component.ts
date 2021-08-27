import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-constructeur',
  templateUrl: './constructeur.component.html',
  styleUrls: ['./constructeur.component.css']
})
export class ConstructeurComponent implements OnInit {

  public constructeur: string[] = new Array(2).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les constructeurs");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.constructeur.length; i++){
      fetch(`/assets/code/poo/constructeur${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.constructeur[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
