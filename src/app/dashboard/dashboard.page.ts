import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
username: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
  }

  logout(){
   this.router.navigate(['login']);
  }
 
}
