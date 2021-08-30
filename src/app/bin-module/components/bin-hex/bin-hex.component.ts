import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-bin-hex',
  templateUrl: './bin-hex.component.html',
  styleUrls: ['./bin-hex.component.css']
})
export class BinHexComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion binaire - hexa");
  }

  ngOnInit(): void {
  }

}
