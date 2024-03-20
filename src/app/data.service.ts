import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

      constructor(
        private authenticate: AuthenticationService
      ) {}
      time: number = 2000;

    fetchData(){
      return new Promise ((resolve, reject) => {
        if (this.authenticate.authenticate){
          setTimeout(() => {
            resolve('Data fetched successfully');
          }, this.time)
        } else {
          reject(new Error ('Failed to fetched data'));
        }
      })
    }
}
