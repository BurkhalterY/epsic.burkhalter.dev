import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  public interfaces: string[] = new Array(5).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les interfaces");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.interfaces.length; i++){
      fetch(`/assets/code/poo/interfaces${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.interfaces[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
