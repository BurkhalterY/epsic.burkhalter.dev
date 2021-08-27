import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-classes-abstraites',
  templateUrl: './classes-abstraites.component.html',
  styleUrls: ['./classes-abstraites.component.css']
})
export class ClassesAbstraitesComponent implements OnInit {

  public classesAbstraites: string[] = new Array(5).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les classes abstraites");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.classesAbstraites.length; i++){
      fetch(`/assets/code/poo/classesAbstraites${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.classesAbstraites[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
