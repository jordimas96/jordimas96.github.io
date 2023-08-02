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
    };
    public nomCarpetaCV = {
        "ca": "CA",
        "es": "ES",
        "en": "EN",
    };

    constructor(public m: MainService) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Moviment i animació fons //
        $("body").css({ "background-position": "top left" });
        await Utils.wait(0);
        $("body").css({ "transition": "background-position 0.3s ease" });

        // Google Analytics //
        this.m.gas.pageView("/home");
    }

    afterRootFadeIn() {
        $(".content .ocult-animacio:not(.chip)").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });

        $(".content .skills app-skill").each((i, e) => {
            Utils.fadeIn(e, i * 20);
        });
    }


    getSalutacioSegonsHora() {
        let horaActual = new Date().getHours();
        let index;

        const primeraHoraMati = 5;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 19;

        if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            index = 0;
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            index = 1;
        else
            index = 2;
        
        return this.salutacions[this.m.idioma][index] || "Hey!";
    }

    getRutaCV() {
        return `assets/CV/${this.nomCarpetaCV[this.m.idioma]}/CV Jordi Mas Parramon.pdf`;
    }
}
