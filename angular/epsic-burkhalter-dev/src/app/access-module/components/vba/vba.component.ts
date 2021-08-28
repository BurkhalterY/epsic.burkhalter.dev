import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-vba',
  templateUrl: './vba.component.html',
  styleUrls: ['./vba.component.css']
})
export class VbaComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les bases du VBA");
  }

  ngOnInit(): void {
  }

}
