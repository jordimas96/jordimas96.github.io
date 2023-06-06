import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-detalls-android-apps',
  templateUrl: './detalls-android-apps.component.html',
  styleUrls: ['./detalls-android-apps.component.scss']
})
export class DetallsAndroidAppsComponent {

  constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    
    afterRootFadeIn() { }
  
}
