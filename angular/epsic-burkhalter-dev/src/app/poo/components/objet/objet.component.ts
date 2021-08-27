import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Qu'est-ce qu'un objet ?");
  }

  ngOnInit(): void {
  }

}
