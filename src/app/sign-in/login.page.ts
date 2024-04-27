import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private alerController: AlertController, private authenticate: AuthenticationService, private route: Router) { }

  ngOnInit() {
  } 
  login(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredentail) => {

      const user = userCredentail.user;
      this.authenticate.setAuthentication(true);
      this.alertP('Success', 'Welcome' +user.displayName);
      this.route.navigate(['dashboard']);
     
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.alertP('Success', 'Invalid Password');

    });
  }
  async alertP(header: string, message: string){
    const alert = await this.alerController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
      await alert.present();
  }
}

