import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-polymorphisme',
  templateUrl: './polymorphisme.component.html',
  styleUrls: ['./polymorphisme.component.css']
})
export class PolymorphismeComponent implements OnInit {

  public polymorphisme: string = "";

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Le polymorphisme");
  }

  ngOnInit(): void {
    fetch('/assets/code/poo/polymorphisme.java')
    .then(response => response.text())
    .then(data => {
      this.polymorphisme = Prism.highlight(data, Prism.languages.java);
    });
  }

}
