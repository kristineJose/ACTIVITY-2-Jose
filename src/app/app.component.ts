import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isUpdate = false;
  constructor(private  swUpdate: SwUpdate) {}

  async ngOninit(){
    await this.swUpdate.versionUpdates.subscribe;{() =>{
    this.swUpdate.checkForUpdate().then(newVersion => {
      if (newVersion && confirm('A new version is available. Do you want to load it?')){
        this.isUpdate = true;
        window.location.reload();
      }
    })
  }
}
}
}
