import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  operator = '+';
  result: number;
  constructor() { }

  action() {
    switch (this.operator) {
      case'+': this.result = this.number1 * 1 + this.number2 * 1;
               break;
      case'-': this.result = this.number1 - this.number2;
               break;
      case'X': this.result = this.number1 * this.number2;
               break;
      case'/': this.result = this.number1 / this.number2;
               break;
      default: this.result = null;
    }
  }
  keypress(event) {
    // tslint:disable-next-line:triple-equals
    if (event.keyCode == 101) {
      event.preventDefault();
    }
  }
  updateNumber1(number1) {
      this.number1 = number1;
  }

  updateNumber2(number2) {
    this.number2 = number2;
  }

  updateOperator(operator) {
    this.operator = operator;
  }

  ngOnInit() {
  }

}
