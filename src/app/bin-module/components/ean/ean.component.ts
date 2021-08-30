import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ean',
  templateUrl: './ean.component.html',
  styleUrls: ['./ean.component.css']
})
export class EanComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les codes-barres EAN");
  }

  ngOnInit(): void {
  }

}
