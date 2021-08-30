import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-phpmyadmin',
  templateUrl: './phpmyadmin.component.html',
  styleUrls: ['./phpmyadmin.component.css']
})
export class PhpmyadminComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Prise en main de phpMyAdmin");
  }

  ngOnInit(): void {
  }

}
