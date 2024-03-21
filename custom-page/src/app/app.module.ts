import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewPage } from './new-page/new-page.page';
import { HomePage } from './home/home.page';
import { AnotherPagePage } from './another/another.page';
import { SharedFolderPage } from './shared-folder/custom.component';

@NgModule({

  declarations: [
    AppComponent,
    NewPage,
    AnotherPagePage,
    HomePage,
    SharedFolderPage,
  ],
  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
