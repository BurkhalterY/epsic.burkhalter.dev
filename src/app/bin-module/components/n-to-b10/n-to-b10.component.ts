import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-n-to-b10',
  templateUrl: './n-to-b10.component.html',
  styleUrls: ['./n-to-b10.component.css']
})
export class NToB10Component implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion base n en base 10");
  }

  ngOnInit(): void {
  }

}
