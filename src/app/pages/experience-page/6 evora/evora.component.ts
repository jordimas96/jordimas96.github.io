import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrls: ['./evora.component.scss', '../experience-page.scss']
})
export class EvoraComponent {
    
    public links = {
        ca: "https://www.evorait.com/",
        es: "https://www.evorait.com/",
        en: "https://www.evorait.com/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
