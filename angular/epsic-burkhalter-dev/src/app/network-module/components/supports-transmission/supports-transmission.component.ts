import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-supports-transmission',
  templateUrl: './supports-transmission.component.html',
  styleUrls: ['./supports-transmission.component.css']
})
export class SupportsTransmissionComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Les supports de transmission");
  }

  ngOnInit(): void {
  }

}
