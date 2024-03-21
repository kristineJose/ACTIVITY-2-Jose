import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './new-page.page.html',
})

export class NewPage implements OnInit {
  
    constructor(private router: Router,
    private authenticate: AuthenticationService) 
    {}

  ngOnInit() {
    this.authenticate.authenticate = false; 
    }

    goByEvent() {
    this.router.navigate(['another']);
    }

  
  goWithAuthorization() {
    this.authenticate.authenticate = true;
  }

  // Ionic Lifecycle Events
  ionViewWillEnter() {
    console.log('You will now enter new page');
  }

  ionViewDidEnter() {
    console.log('You enter new page');
  }

  ionViewWillLeave() {
    console.log('You will now leave new page');
  }

  ionViewDidLeave() {
    console.log('You leave new page');
  }
}
