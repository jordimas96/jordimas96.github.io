import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-android-apps',
    templateUrl: './android-apps.component.html',
    styleUrls: ['./android-apps.component.scss', '../projects-page.scss']
})
export class AndroidAppsComponent {

    constructor(public m: MainService) { }


    getAmazonLink_apps() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/s?rh=p_4%3AJMasDev`;
    }
    
}
