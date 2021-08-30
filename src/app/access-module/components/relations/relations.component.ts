import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les relations");
  }

  ngOnInit(): void {
  }

}
