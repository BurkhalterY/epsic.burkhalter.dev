import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var Prism: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public Prism: any = {};

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les formulaires");
    this.Prism = Prism;
  }

  ngOnInit(): void {
  }

}
