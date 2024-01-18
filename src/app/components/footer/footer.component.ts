import { Component, ElementRef } from '@angular/core';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';
import { Utils } from '../../shared/utils';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    
    modeFosc: boolean = true;
    tema: string = "";
    idioma: string = "en";

    colorFirma = Math.floor(Math.random() * 360);
    

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
    ) {
        // m.footer = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() {
        $(this.rootElement.nativeElement).find(".contact-icons a").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
    }

}
