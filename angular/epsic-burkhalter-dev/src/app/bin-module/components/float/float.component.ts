import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.css']
})
export class FloatComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Nombres à virgules flottantes");
  }

  ngOnInit(): void {
  }

}
