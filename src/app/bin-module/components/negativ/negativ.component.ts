import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-negativ',
  templateUrl: './negativ.component.html',
  styleUrls: ['./negativ.component.css']
})
export class NegativComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Soustractions et nombres négatifs");
  }

  ngOnInit(): void {
  }

}
