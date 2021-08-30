import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {

  public number: string = "";
  public baseNumber: string = "10";
  public result: string = "";
  public baseResult: string = "2";
  public msg: string = "";

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Convertisseur");
  }

  ngOnInit(): void {
  }

  public convert(): void {
    let baseNumber = parseFloat(this.baseNumber);
    let baseResult = parseFloat(this.baseResult);

    if(baseNumber >= 2 && baseNumber <= 36 && baseResult >= 2 && baseResult <= 36 && baseNumber % 1 === 0 && baseResult % 1 === 0){
      this.msg = "";
      this.result = parseInt(this.number, baseNumber).toString(baseResult);
    } else {
      this.msg = "Uniquement bases entières entre 2 et 36 supportées !";
    }
  }

}
