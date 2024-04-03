import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(private authenticate: AuthenticationService) { }

  ngOnInit() {
    this.authenticate.authenticated = false;
  }
  result: string = '';

  showResult(value: string) {
    this.result += value;
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clearResult() {
    this.result = '';
  }
 
}

