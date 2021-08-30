import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("L'Active Directory (AD)");
  }

  ngOnInit(): void {
  }

}
