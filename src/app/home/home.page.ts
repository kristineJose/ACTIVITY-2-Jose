import { Component } from '@angular/core';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  user: iUser = { title: '', author: '', genre: '', price: 0,};
  userList!: iUser[];
  isLoading = false;
  

  constructor(
    private homeService: HomeService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {
    this.users();
  }

  async save() {
    if (this.user.title) {
      this.homeService.tryUpdate(this.user);
      this.presentToast('Book Updated');
    } else {
      this.homeService.tryAdd(this.user);
      this.presentToast('Book Added');
    }
    this.user = { title: '', author: '', genre: '', price: 0 };
    this.users();
  }

  async users() {
    this.isLoading = true;
    this.userList = await this.homeService.getUsers();
    this.isLoading = false;
  }

  async edit(user: iUser) {
    this.user = { ...user };
  }

  async delete(user: iUser) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: async () => {
            this.isLoading = true;
            await this.homeService.tryDelete(user);
            this.alertP('Delete', 'Book Deleted');
            this.users();
            this.isLoading = false;
          }
        }
      ]
    });
    await alert.present();
  }

  async alertP(header: string, message: string) {
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
  logout(){
    this.router.navigate(['sign-in'])
  }
}

