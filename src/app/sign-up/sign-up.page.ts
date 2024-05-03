import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private alertController: AlertController, private route: Router, private aut: AuthenticationService, private toastController: ToastController) { }

  ngOnInit() {
  }

  getAuthenticate(){
    
  }

  async signUp(){
    if (!this.email || !this.password || !this.confirmPassword){
      this.alertP('Error', 'Please fill in all the fields.');
      return;
    }

    if (this.password !== this.confirmPassword){
      this.alertP('Error', 'Please check the password.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredentail) => {
      const user = userCredentail.user;
      this.presentToast('SignUp Successful!')
      this.route.navigate(['sign-in']);
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);

    });

    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
  
  async alertP(header: string, message: string){
    const alert = await this.alertController.create({
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
 
  goToSignIn() {
    this.route.navigate(['sign-in']);
  }
}


