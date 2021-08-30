import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-site-web',
  templateUrl: './site-web.component.html',
  styleUrls: ['./site-web.component.css']
})
export class SiteWebComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Qu'est-ce qu'un site web ?");
  }

  ngOnInit(): void {
  }

}
