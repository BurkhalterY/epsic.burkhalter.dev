import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-fk-theorie',
  templateUrl: './fk-theorie.component.html',
  styleUrls: ['./fk-theorie.component.css']
})
export class FkTheorieComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Mieux comprendre les FK");
  }

  ngOnInit(): void {
  }

}
