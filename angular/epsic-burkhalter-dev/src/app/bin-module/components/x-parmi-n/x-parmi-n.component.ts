import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-x-parmi-n',
  templateUrl: './x-parmi-n.component.html',
  styleUrls: ['./x-parmi-n.component.css']
})
export class XParmiNComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Code x parmi n");
  }

  ngOnInit(): void {
  }

}
