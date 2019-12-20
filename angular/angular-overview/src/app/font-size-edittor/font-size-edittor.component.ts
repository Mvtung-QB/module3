import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-edittor',
  templateUrl: './font-size-edittor.component.html',
  styleUrls: ['./font-size-edittor.component.scss']
})
export class FontSizeEdittorComponent implements OnInit {
  fontSize = 14;

  constructor() {
  }

  onChange(value) {
    this.fontSize = value;
  }

  ngOnInit() {
  }

}
