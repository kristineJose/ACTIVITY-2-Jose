import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
username: string = '';
  constructor(private router: Router, private authenticate: AuthenticationService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
    this.authenticate.authenticated = false;
  }

  logout(){
    this.router.navigate(['login']);
   
  } 
  calculator(){
    this.router.navigate(['calculator']);
    this.authenticate.authenticated = true;
    
  }
}
