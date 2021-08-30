import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-bcd',
  templateUrl: './bcd.component.html',
  styleUrls: ['./bcd.component.css']
})
export class BcdComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("BCD");
  }

  ngOnInit(): void {
  }

}
