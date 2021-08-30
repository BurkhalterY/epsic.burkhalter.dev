import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-calculateur-sr',
  templateUrl: './calculateur-sr.component.html',
  styleUrls: ['./calculateur-sr.component.css']
})
export class CalculateurSrComponent implements OnInit {

  public nbIPstr: string = "";
  public nbSRstr: string = "";
  private nbIP: number = 0;
  private nbSR: number = 0;
  private n_IP: number = 0;
  private n_SR: number = 0;
  private n_R: number = 0;
  private classe: string = "";
  private NET_ID: number = 0;
  private MASK: number = 0;
  private SR: number[] = new Array();

  public step1o_ip: string = "";
  public step1o_sr: string = "";
  public step2o_ip: string = "";
  public step2o_sr: string = "";
  public step3o_classe: string = "";
  public step3o_net_id: string = "";
  public step35o: string = "";
  public step4o: string = "";
  public step5o: string = "";
  public step6o: string[][] = new Array();

  constructor(private _titleService: Title) {
    this._titleService.setTitle("Calculateur de sous-réseaux");
  }

  ngOnInit(): void {
  }

  public calculate(): void {
    this.nbIP = parseInt(this.nbIPstr);
    this.nbSR = parseInt(this.nbSRstr);

    if(this.nbIP > 0 && this.nbSR > 0){
      this.step1();
      this.step2();
      this.step3();
      this.step35();
      this.step4();
      this.step5();
      this.step6();
    } else {
      this.step1o_ip = "";
      this.step1o_sr = "";
      this.step2o_ip = "";
      this.step2o_sr = "";
      this.step3o_classe = "";
      this.step3o_net_id = "";
      this.step35o = "";
      this.step4o = "";
      this.step5o = "";
      this.step6o = [];
    }
  }

  private step1(): void {
    this.step1o_ip = this.nbIP.toString();
    this.nbIP++;
    this.step1o_ip += " + 1 (passerelle) = " + this.nbIP;
    this.step1o_ip += "<br>" + this.nbIP;
    this.nbIP += Math.ceil(this.nbIP/10);
    this.step1o_ip += " + 10% = " + this.nbIP;

    this.step1o_sr = this.nbSR.toString();
    this.nbSR += Math.ceil(this.nbSR/10);
    this.step1o_sr += " + 10% = " + this.nbSR;
  }

  private step2(): void {
    this.n_IP = this.ln(this.nbIP + 2) / this.ln(2);
    this.step2o_ip = "n = ln(" + this.nbIP + " + 2) / ln(2) = ~" + this.n_IP;
    this.n_IP = Math.ceil(this.n_IP);
    this.step2o_ip += " → " + this.n_IP;

    this.n_SR = this.ln(this.nbSR + 2) / this.ln(2);
    this.step2o_sr = "n = ln(" + this.nbSR + " + 2) / ln(2) = ~" + this.n_SR;
    this.n_SR = Math.ceil(this.n_SR);
    this.step2o_sr += " → " + this.n_SR;
  }

  private step3(): void {
    if(this.n_IP + this.n_SR <= 8){
      this.classe = "C";
      this.NET_ID = this.ipToNumber([192, 168, 1, 0]);
      this.n_R = 24;
      this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 8 → Classe C";
    } else if(this.n_IP + this.n_SR <= 16){
      this.classe = "B";
      this.NET_ID = this.ipToNumber([172, 16, 0, 0]);
      this.n_R = 16;
      this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 16 → Classe B";
    } else if(this.n_IP + this.n_SR <= 24){
      this.classe = "A";
      this.NET_ID = this.ipToNumber([10, 0, 0, 0]);
      this.n_R = 8;
      this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 24 → Classe A";
    }
    this.step3o_net_id = "NET_ID : " + this.showIP(this.numberToIp(this.NET_ID));
  }

  private step35(): void {
    let n_IP = this.n_IP;
    let n_SR = this.n_SR;
    if(this.n_IP + this.n_SR <= 8){
      this.n_IP += 8 - this.n_IP - this.n_SR;
    } else if(this.n_IP + this.n_SR <= 16){
      if(this.n_IP <= 8 && this.n_SR <= 8){
        this.n_IP = 8;
        this.n_SR = 8;
      } else {
        this.n_IP += 16 - this.n_IP - this.n_SR;
      }
    } else if(this.n_IP + this.n_SR <= 24){
      if(this.n_IP <= 8 && this.n_SR <= 16){
        this.n_IP = 8;
        this.n_SR = 16;
      } else if(this.n_IP <= 16 && this.n_SR <= 8){
        this.n_IP = 16;
        this.n_SR = 18;
      } else {
        this.n_IP += 24 - this.n_IP - this.n_SR;
      }
    }
    if(this.n_IP != n_IP || this.n_SR != n_SR){
      let calcul_IP = n_IP + " → " + this.n_IP;
      let calcul_SR = n_SR + " → " + this.n_SR;
      this.step35o = calcul_IP + "<br>" + calcul_SR;
    } else {
      this.step35o = "";
    }

    this.nbIP = Math.pow(2, this.n_IP) - 2;
    this.nbSR = Math.pow(2, this.n_SR) - 2;
  }

  private step4(): void {
    this.MASK = this.n_R + this.n_SR;
    this.step4o = "MASK : " + this.showIP(this.showMask(this.MASK));
  }

  private step5(): void {
    this.step5o = "";
    let step = Math.pow(2, this.n_IP);
    this.SR = new Array(this.nbSR + 1);
    for(let i = 0; i < this.SR.length; i++){
      if(i == 0){
        this.SR[i] = this.NET_ID + step;
      } else {
        this.SR[i] = this.SR[i-1] + step;
      }
      if(i < this.SR.length-1){
        if(i < 9 || i == this.SR.length-2){
          if(i > 0){
            this.step5o += "<br>";
            if(i > 9 && i == this.SR.length-2){
              this.step5o += "...<br>";
            }
          }
          this.step5o += this.showIP(this.numberToIp(this.SR[i]));
        }
      }
    }
  }

  private step6(): void {
    this.step6o = [];
    for(let i = 0; i < this.SR.length-1; i++){
      this.step6o.push([
        this.showIP(this.numberToIp(this.SR[i])),
        this.showIP(this.numberToIp(this.SR[i]+1)),
        this.showIP(this.numberToIp(this.SR[i+1]-2)),
        this.showIP(this.numberToIp(this.SR[i+1]-1))
      ]);
    }
  }

  private ln(a: number): number {
    return Math.log(a) / Math.log(Math.E);
  }

  private showIP(ip: number[]): string {
    let result = "";
    for(let k = 0; k < ip.length; k++){
      if(k > 0){
        result += ".";
      }
      result += ip[k];
    }
    return result;
  }

  private showMask(mask: number): number[] {
    let result = [0, 0, 0, 0];
    for(let k = 0; k < mask; k++){
      result[Math.ceil((k+1)/8)-1] += Math.pow(2, 7-(k % 8));
    }
    return result;
  }

  private ipToNumber(ip: number[]): number {
    let number = 0;
    for(let k = 0; k < ip.length; k++){
      number += ip[k] * Math.pow(256, 3-k);
    }
    return number;
  }

  private numberToIp(number: number): number[] {
    let ip = new Array(4);
    let r = 0;
    for(let k = 0; k < ip.length; k++){
      let r = number % 256;
      number = Math.floor(number / 256);
      ip[3-k] = r;
    }
    return ip;
  }
}
