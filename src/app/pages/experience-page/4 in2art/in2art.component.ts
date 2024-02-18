import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-in2art',
    templateUrl: './in2art.component.html',
    styleUrls: ['./in2art.component.scss', '../experience-page.scss', '../../../components/card/card.scss']
})
export class In2artComponent extends CardComponent {
    
    public links = {
        ca: "https://in2.art/es",
        es: "https://in2.art/es",
        en: "https://in2.art/en",
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
