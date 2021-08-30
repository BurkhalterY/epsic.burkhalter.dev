import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Menu - Module 123");
  }

  ngOnInit(): void {
  }

}
