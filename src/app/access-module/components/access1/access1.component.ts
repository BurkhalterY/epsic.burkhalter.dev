import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-access1',
  templateUrl: './access1.component.html',
  styleUrls: ['./access1.component.css']
})
export class Access1Component implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Ma base de données en Access 1.0");
  }

  ngOnInit(): void {
  }

}
