import { Component } from '@angular/core';
import { Utils } from '../../services/utils.service';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';


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
    

    constructor(public m: MainService) {
        // m.footer = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() {
        $(".contact-icons a").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
    }

}
