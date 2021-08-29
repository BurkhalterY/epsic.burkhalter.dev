import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Menu - Module 114");
  }

  ngOnInit(): void {
  }

}
