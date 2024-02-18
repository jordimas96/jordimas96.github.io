import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrls: ['./evora.component.scss', '../experience-page.scss', '../../../components/card/card.scss']
})
export class EvoraComponent extends CardComponent {
    
    public links = {
        ca: "https://www.evorait.com/",
        es: "https://www.evorait.com/",
        en: "https://www.evorait.com/",
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
