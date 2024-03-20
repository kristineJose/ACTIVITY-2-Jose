import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  NumArray = 4; 
  ObjArray: string[] = [];
  data: string = '';
  LoadingText: string = 'Loading...';
  isLoading: boolean = false;

  constructor(
    private AuthenticationService: AuthenticationService,
    private dataService: DataService
  ) {}

    isAuthenticate(){
    this.isLoading = true;
    this.dataService.fetchData()
    .then (data => {
      console.log(data);
    })
    .catch (error => {
      console.log(error.message);
    })
    .finally (() => {
      this.isLoading = false;
    })

    }

  authenticate() {
    this.AuthenticationService.authenticate = true;
    console.log('authenticated');

  }

  unauthenticate() {
    this.AuthenticationService.authenticate = false;
    console.log('Please authenticate');
  }

  showObject() {
    this.isAuthenticate();
    if (this.AuthenticationService.authenticate) {
      setTimeout(() => {
        this.ObjArray = ["1", "2", "3"];  
        console.log('Numbers of Array:', this.ObjArray);
      }, 2000); 
    }
  }

  addToObject() {
    this.isAuthenticate();
    if (this.AuthenticationService.authenticate) {
      setTimeout(() => {
        this.ObjArray = [...this.ObjArray, this.NumArray.toString()];
        this.NumArray += 1; 
        console.log('Numbers of Array:', this.ObjArray);
      }, 2000); 
    } 
  }
}