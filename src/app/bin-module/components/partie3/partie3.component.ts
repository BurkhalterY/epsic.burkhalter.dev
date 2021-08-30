import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-partie3',
  templateUrl: './partie3.component.html',
  styleUrls: ['./partie3.component.css']
})
export class Partie3Component implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Partie 3");
  }

  ngOnInit(): void {
  }

}
