import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username: string = '';
password: string = '';
  constructor(private alertCtrl: AlertController, private router: Router, private authenticate: AuthenticationService, private toastController: ToastController) { }

  ngOnInit() {
    this.authenticate.authenticated = false;
  }

  async prcLogin() {
    const alert = await this.alertCtrl.create({
        header: 'Login',
        subHeader: 'Status',
        message: 'Login success!',
        buttons: ['OK']  
      });
      if (!this.username || !this.password) {
        this.showToast('Please enter both username and password');
        return; 
      }
      if (this.password.length < 4) {
        this.showToast('Login Failed');
        return; 
      } 

      localStorage.setItem('username',this.username);
      await alert.present();
      this.router.navigate(['dashboard/home']);
      this.authenticate.authenticated = true;
   
  }
  
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
