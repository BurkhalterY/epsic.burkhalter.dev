import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  private readonly lower: string = 'abcdefghijklmnopqrstuvwxyz';
  private readonly upper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers: string = '0123456789';
  private readonly symbols: string = '!#$%&*+-=?@';
  public readonly similar: string = '1lIioO0';

  public length: number = 12;
  public useLower: boolean = true;
  public useUpper: boolean = true;
  public useNumbers: boolean = true;
  public useSymbols: boolean = true;
  public avoidSimilar: boolean = true;

  public history: string[] = [];

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Générateur de mot de passes");
  }

  ngOnInit(): void {
  }

  public generate(): void {
    let characters = '';

    if(this.useLower){
      characters += this.lower;
    }
    if(this.useUpper){
      characters += this.upper;
    }
    if(this.useNumbers){
      characters += this.numbers;
    }
    if(this.useSymbols){
      characters += this.symbols;
    }
    if(this.avoidSimilar){
      for (let i = 0; i < this.similar.length; i++) {
        characters = characters.replace(this.similar.charAt(i), '');
      }
    }

    let password = '';
    let charactersLength = characters.length;
    for (let i = 0; i < this.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.history.unshift(password);
  }

}
