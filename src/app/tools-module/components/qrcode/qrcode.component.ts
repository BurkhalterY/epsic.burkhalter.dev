import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  public qrValue: string = "";

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Générateur de QR Code");
  }

  ngOnInit(): void {
  }

}
