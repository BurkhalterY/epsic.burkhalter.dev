import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-install-mysql',
  templateUrl: './install-mysql.component.html',
  styleUrls: ['./install-mysql.component.css']
})
export class InstallMysqlComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Installer un serveur MySQL");
  }

  ngOnInit(): void {
  }

}
