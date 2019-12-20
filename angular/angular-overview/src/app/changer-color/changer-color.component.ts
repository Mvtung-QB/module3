import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changer-color',
  templateUrl: './changer-color.component.html',
  styleUrls: ['./changer-color.component.scss']
})
export class ChangerColorComponent implements OnInit {
  bgColor: string;

  onChange(bg: string) {
    this.bgColor = bg;
  }

  constructor() { }

  ngOnInit() {
  }

}
