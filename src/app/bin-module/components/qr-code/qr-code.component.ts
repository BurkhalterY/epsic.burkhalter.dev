import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les QR codes");
  }

  ngOnInit(): void {
  }

}
