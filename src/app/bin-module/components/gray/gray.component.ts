import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-gray',
  templateUrl: './gray.component.html',
  styleUrls: ['./gray.component.css']
})
export class GrayComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Code Gray");
  }

  ngOnInit(): void {
  }

}
