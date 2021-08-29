import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-voc',
  templateUrl: './voc.component.html',
  styleUrls: ['./voc.component.css']
})
export class VocComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Vocabulaire");
  }

  ngOnInit(): void {
  }

}
