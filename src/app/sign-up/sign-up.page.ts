import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private alertController: AlertController, private route: Router) { }

  ngOnInit() {
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
      this.alertP('Success', 'SignUp Successful!')
      this.route.navigate(['login']);
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
}
