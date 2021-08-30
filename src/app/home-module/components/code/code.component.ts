import { Component, OnInit, Input } from '@angular/core';
import 'prismjs';

declare var Prism: any;
Prism.manual = true;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  @Input() file: string = "";
  @Input() lang: any = {};
  @Input() inlineCode: string = "";
  public content: string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.inlineCode == ""){
      fetch(`/assets/code/${this.file}`)
      .then(response => response.text())
      .then(data => {
        this.content = Prism.highlight(data, this.lang);
      });
    } else {
      this.content = Prism.highlight(this.inlineCode, this.lang);
    }
  }

}
