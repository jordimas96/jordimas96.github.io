import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-nexxia',
    templateUrl: './nexxia.component.html',
    styleUrls: ['./nexxia.component.scss', '../experience-page.scss']
})
export class NexxiaComponent extends CardComponent {
    
    public links = {
        ca: "https://www.nexxiasoft.com/?lang=ca",
        es: "https://www.nexxiasoft.com/?lang=es",
        en: "https://www.nexxiasoft.com/?lang=es",
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
