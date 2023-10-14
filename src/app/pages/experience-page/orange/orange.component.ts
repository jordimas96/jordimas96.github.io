import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-orange',
    templateUrl: './orange.component.html',
    styleUrls: ['./orange.component.scss', '../experience-page.scss']
})
export class OrangeComponent {
    
    public links = {
        ca: "https://www.orange.es/empresas/grandes-empresas",
        es: "https://www.orange.es/empresas/grandes-empresas",
        en: "https://www.orange.es/empresas/grandes-empresas",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
