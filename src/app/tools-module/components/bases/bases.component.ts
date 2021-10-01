import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  public base: string = "10";
  public value: string = "";
  public msg: string = "";

  public results: { base: number, value: string }[] = [];

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Conversion de bases");
  }

  ngOnInit(): void {
  }

  public convert(): void {
    let base = parseFloat(this.base);

    if(base >= 2 && base <= 36 && base % 1 === 0) {
      this.results = [];
      let last = "";
      for(let i = 2; i <= 36; i++){
        let intValue = parseInt(this.value, base);
        let value = intValue.toString(i);
        if(value == last || isNaN(intValue)){
          break;
        }
        last = value;
        this.results.push({ base: i, value: value });
      }
      this.msg = "";
    } else {
      this.results = [];
      this.msg = "Uniquement bases entières entre 2 et 36 supportées !";
    }
  }
}
