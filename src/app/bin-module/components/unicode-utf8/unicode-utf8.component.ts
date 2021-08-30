import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-unicode-utf8',
  templateUrl: './unicode-utf8.component.html',
  styleUrls: ['./unicode-utf8.component.css']
})
export class UnicodeUtf8Component implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("L'Unicode et UTF-8");
  }

  ngOnInit(): void {
  }

}
