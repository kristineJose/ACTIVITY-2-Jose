import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

  ngOnInit() {}

  constructor( private router: Router,
              private authenthicate: AuthenticationService
              ) {}

  goByEvent() {
    this.router.navigate(['new-page']);
  }

  goWithAuthorization() {
    this.authenthicate.authenticate = true;
  }

 // Ionic Lifecycle Events

  ionViewWillEnter() {
    console.log('You will now enter home page');
  }

  ionViewDidEnter() {
    console.log('You enter home page');
  }

  ionViewWillLeave() {
    console.log('You will now leave home page');
  }

  ionViewDidLeave() {
    console.log('You leave home page');
  }
}
