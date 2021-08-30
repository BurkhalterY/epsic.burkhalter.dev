import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-fk',
  templateUrl: './fk.component.html',
  styleUrls: ['./fk.component.css']
})
export class FkComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Lier un champ FK_");
  }

  ngOnInit(): void {
  }

}
