import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor(private route: Router) { }

  setAuthentication(auth:boolean){
    if (auth) {
      localStorage.setItem('loggedin', 'true');
    }
  } 
  canActivate(){
   if(localStorage.getItem('loggedin') =='true'){
    this.route.navigate(['sign-in']);
      return true;
   } else{
     return this.authenticated;
  }
}
}

