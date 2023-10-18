import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-indra',
    templateUrl: './indra.component.html',
    styleUrls: ['./indra.component.scss', '../experience-page.scss']
})
export class IndraComponent {
    
    public links = {
        ca: "https://www.indracompany.com/es/",
        es: "https://www.indracompany.com/es/",
        en: "https://www.indracompany.com/en/",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
