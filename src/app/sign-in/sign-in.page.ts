import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private alerController: AlertController, private authenticate: AuthenticationService, private route: Router, private toastController: ToastController) { }

  ngOnInit() {
  } 
  signIn(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredentail) => {

      const user = userCredentail.user;
      this.authenticate.setAuthentication(true);
      this.presentToast( 'Welcome' +user.displayName);
      this.route.navigate(['home']);

     
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.alertP('', 'Invalid Password');

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

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  goToSignUp() {
    this.route.navigate(['/sign-up']);
  }
  
}
