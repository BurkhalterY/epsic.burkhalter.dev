import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-heritage',
  templateUrl: './heritage.component.html',
  styleUrls: ['./heritage.component.css']
})
export class HeritageComponent implements OnInit {

  public heritage: string[] = new Array(3).fill('');

  constructor(private _titleService: Title) {
    this._titleService.setTitle("L'héritage");
  }

  ngOnInit(): void {
    for(let i = 0; i < this.heritage.length; i++){
      fetch(`/assets/code/poo/heritage${i}.java`)
      .then(response => response.text())
      .then(data => {
        this.heritage[i] = Prism.highlight(data, Prism.languages.java);
      });
    }
  }

}
