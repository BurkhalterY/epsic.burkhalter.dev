import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css']
})
export class EncapsulationComponent implements OnInit {

  public encapsulation: string[] = new Array(2).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("L'encapsulation");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.encapsulation.length; i++){
      fetch(`/assets/code/poo/encapsulation${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.encapsulation[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
