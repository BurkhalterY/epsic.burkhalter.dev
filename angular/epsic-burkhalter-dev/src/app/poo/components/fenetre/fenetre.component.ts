import { Component, OnInit } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-fenetre',
  templateUrl: './fenetre.component.html',
  styleUrls: ['./fenetre.component.css']
})
export class FenetreComponent implements OnInit {

  public fenetre: string[] = new Array(2).fill('');

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.fenetre.length; i++){
      fetch(`/assets/code/poo/fenetre${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.fenetre[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
