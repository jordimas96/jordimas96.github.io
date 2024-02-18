import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-indra',
    templateUrl: './indra.component.html',
    styleUrls: ['./indra.component.scss', '../experience-page.scss', '../../../components/card/card.scss']
})
export class IndraComponent extends CardComponent {
    
    public links = {
        ca: "https://www.indracompany.com/es/",
        es: "https://www.indracompany.com/es/",
        en: "https://www.indracompany.com/en/",
    };

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
