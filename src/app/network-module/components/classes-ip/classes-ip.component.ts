import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-classes-ip',
  templateUrl: './classes-ip.component.html',
  styleUrls: ['./classes-ip.component.css']
})
export class ClassesIpComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les classes d'adresses IP");
  }

  ngOnInit(): void {
  }

}
