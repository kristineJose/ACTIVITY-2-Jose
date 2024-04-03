import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(private authenticate: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticate.authenticated = false;
    this.username = localStorage.getItem('username') || '';
  }
  result: string = '';
  username: string = '';

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
  clearNumber() {
    if (this.result.length > 0) {
      this.result = this.result.slice(0, -1);
    }
  }
  dashboard(){
    this.router.navigate(['dashboard/home'])
    this.authenticate.authenticated = true;
  }
}

