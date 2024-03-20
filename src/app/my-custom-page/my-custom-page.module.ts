import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPagePageRoutingModule } from './my-custom-page-routing.module';

import { MyCustomPagePage } from './my-custom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCustomPagePageRoutingModule
  ],
  declarations: [MyCustomPagePage]
})
export class MyCustomPagePageModule {}
