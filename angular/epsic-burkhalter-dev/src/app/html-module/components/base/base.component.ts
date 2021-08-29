import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {
    this._document.getElementById("appFavicon")!.setAttribute("href", "/assets/icon/html.ico");
  }

  ngOnInit(): void {
  }

}
