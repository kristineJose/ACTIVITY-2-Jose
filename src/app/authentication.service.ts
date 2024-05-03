import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private route: Router) { }

  setAuthentication(auth: boolean) {
    if (auth) {
      localStorage.setItem('loggedin', 'true');
    }
  }

  canActivate(): boolean {
    if (localStorage.getItem('loggedin') == 'true') {
      return true; // User is authenticated
    } else {
      this.route.navigate(['sign-in']); // Redirect to sign-in page
      return false;
    }
  }
}
