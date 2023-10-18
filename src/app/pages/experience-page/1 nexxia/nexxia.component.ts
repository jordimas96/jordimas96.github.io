import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-nexxia',
    templateUrl: './nexxia.component.html',
    styleUrls: ['./nexxia.component.scss', '../experience-page.scss']
})
export class NexxiaComponent {
    
    public links = {
        ca: "https://www.nexxiasoft.com/?lang=ca",
        es: "https://www.nexxiasoft.com/?lang=es",
        en: "https://www.nexxiasoft.com/?lang=es",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
