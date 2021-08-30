import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.css']
})
export class DnsComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les DNS");
  }

  ngOnInit(): void {
  }

}
