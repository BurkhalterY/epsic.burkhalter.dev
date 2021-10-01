import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component implements OnInit {

  public content: string = "";
  public base64: string = "";
  public msg: string = "";

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion Base64");
  }

  ngOnInit(): void {
  }

  public toBase64(): void {
    this.base64 = window.btoa(unescape(encodeURIComponent(this.content)));
  }

  public fromBase64(): void {
    try {
      this.content = decodeURIComponent(escape(window.atob(this.base64)));
      this.msg = '';
    } catch(e) {
      this.msg = 'Base64 invalide.';
    }
  }
}
