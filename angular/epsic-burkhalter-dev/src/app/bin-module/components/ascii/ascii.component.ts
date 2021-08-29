import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.css']
})
export class AsciiComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Code ASCII");
  }

  ngOnInit(): void {
  }

}
