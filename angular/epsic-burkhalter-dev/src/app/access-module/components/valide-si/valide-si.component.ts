import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-valide-si',
  templateUrl: './valide-si.component.html',
  styleUrls: ['./valide-si.component.css']
})
export class ValideSiComponent implements OnInit {

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Valide si");
  }

  ngOnInit(): void {
  }

}
