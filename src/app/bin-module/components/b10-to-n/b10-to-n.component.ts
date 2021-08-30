import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-b10-to-n',
  templateUrl: './b10-to-n.component.html',
  styleUrls: ['./b10-to-n.component.css']
})
export class B10ToNComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion base 10 en base n");
  }

  ngOnInit(): void {
  }

}
