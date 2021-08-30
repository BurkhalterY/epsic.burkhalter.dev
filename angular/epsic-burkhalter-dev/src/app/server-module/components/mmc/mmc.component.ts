import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mmc',
  templateUrl: './mmc.component.html',
  styleUrls: ['./mmc.component.css']
})
export class MmcComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("MMC");
  }

  ngOnInit(): void {
  }

}
