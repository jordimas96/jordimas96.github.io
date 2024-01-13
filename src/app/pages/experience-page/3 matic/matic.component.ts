import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-matic',
    templateUrl: './matic.component.html',
    styleUrls: ['./matic.component.scss', '../experience-page.scss']
})
export class MaticComponent extends CardComponent {
    
    public links = {
        ca: "https://www.matic.cat/",
        es: "https://www.matic.cat/es/inicio/",
        en: "https://www.matic.cat/es/inicio/",
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
