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
        Utils.fadeIn($(".content .ocult-animacio").eq(0), 0);
        Utils.fadeIn($(".content .ocult-animacio").eq(1), 25);
        Utils.fadeIn($(".content .ocult-animacio").eq(2), 50);

        $(".content .chips .ocult-animacio").each((i, e) => {
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
}
