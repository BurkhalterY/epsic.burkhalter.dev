import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Additions en binaire");
  }

  ngOnInit(): void {
  }

}
