import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewPage } from './new-page/new-page.page';
import { AuthenticationService } from './authentication.service';
import { SharedFolderPage } from './shared-folder/custom.component';
import { AnotherPagePage } from './another/another.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-page',
    component: NewPage,
    canActivate: [AuthenticationService], 
  },
  {
    path: 'shared-folder',
    component: SharedFolderPage,
  },
  {
    path: 'another',
    component: AnotherPagePage,
    canActivate: [AuthenticationService], 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
