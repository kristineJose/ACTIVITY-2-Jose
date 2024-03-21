import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-folder',
  templateUrl: 'custom.component.html',
})

export class SharedFolderPage {
constructor(private authenticationService: AuthenticationService,
            private router: Router){}

authenticate = false;
  
ngOnInit() {
}
 
}