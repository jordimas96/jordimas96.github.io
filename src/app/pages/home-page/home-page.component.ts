import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    public salutacions = {
        "ca": [
            "Bon dia!",
            "Bona tarda!",
            "Bona nit!",
        ],
        "es": [
            "¡Buenos días!",
            "¡Buenas tardes!",
            "¡Buenas noches!",
        ],
        "en": [
            "Good morning!",
            "Good afternoon!",
            "Good evening!",
        ],
    }

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
    }

    afterRootFadeIn() {
        Utils.fadeIn(".div-foto", 0);
        // Utils.fadeIn(".div-text", 200);
        Utils.fadeIn(".div-text", 50);
    }


    getSalutacioSegonsHora() {
        let horaActual = new Date().getHours();
        let index;

        if (horaActual >= 5 && horaActual < 12)
            index = 0;
        else if (horaActual >= 12 && horaActual < 19)
            index = 1;
        else
            index = 2;
        
        return this.salutacions[this.m.idioma][index] || "Hey!";
    }
}
