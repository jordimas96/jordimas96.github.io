import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-orange',
    templateUrl: './orange.component.html',
    styleUrls: ['./orange.component.scss', '../experience-page.scss', '../../../components/card/card.scss']
})
export class OrangeComponent extends CardComponent {
    
    public links = {
        ca: "https://www.orange.es/empresas/grandes-empresas",
        es: "https://www.orange.es/empresas/grandes-empresas",
        en: "https://www.orange.es/empresas/grandes-empresas",
    }

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }

    getLink() {
        return this.links[this.m.idioma];
    }

}
