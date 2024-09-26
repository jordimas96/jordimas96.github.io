import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-in2art',
    templateUrl: './in2art.component.html',
    styleUrls: ['./in2art.component.scss', '../experience-page.scss']
})
export class In2artComponent {
    
    public links = {
        ca: "https://in2.art/es",
        es: "https://in2.art/es",
        en: "https://in2.art/en",
    };

    public isDown = false; // I have no way to actually know it, just manually checking the web //

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
