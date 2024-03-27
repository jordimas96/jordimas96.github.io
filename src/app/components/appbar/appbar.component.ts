import { Component, HostListener } from '@angular/core';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';
import { Utils } from '../../shared/utils';


@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {

    public width = window.innerWidth;

    constructor(public m: MainService) {
        m.appbar = this;
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));


        this.setTemaSegonsHora();




        // Canviar tema cada 5 segons //
        // let i = 0; setInterval(() => { this.setTemaSegonsHora(i++ % 24); this.actTema(); }, 1000);


        this.actTema();

        // Delay inicial pagina root //
        setTimeout(() => { $("app-root").fadeIn(300); }, this.m.tempsDelayCarregaPag);
    }

    afterRootFadeIn() {
        // $("body").css({ "transition": "background-position 0.3s" });
    }




    setTemaSegonsHora(horaActual = new Date().getHours()) {
        if (Utils.hasCookie("forçartema")) { this.m.tema = Utils.getCookie("forçartema"); return; }

        // this.m.tema = "mati"; return;

        // Colors matinada, matí, tarda, vespre, nit //
        const primeraHoraNit = 1;
        const primeraHoraMatinada = 6;
        const primeraHoraMati = 9;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 20;

        // |12345|678|901234|56789|01230 //

        if (horaActual >= primeraHoraNit && horaActual < primeraHoraMatinada)
            this.m.tema = "nit";
        else if (horaActual >= primeraHoraMatinada && horaActual < primeraHoraMati)
            this.m.tema = "matinada";
        else if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            this.m.tema = "mati";
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            this.m.tema = "tarda";
        else
            this.m.tema = "vespre";


        const ara = new Date();
        const horaSeguent = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate(), ara.getHours() + 1, 0, 0, 0);

        setTimeout(async () => {
            let temaVell = this.m.tema;
            this.setTemaSegonsHora(horaSeguent.getHours());

            $("*").css("transition", "color 1s, background-color 1s");
            this.actTema();
            await Utils.wait(1000);
            $("*").css("transition", "");

            if (temaVell != this.m.tema)
                console.log("Theme changed because it's " + (horaSeguent.getHours()) + ":00");
        }, horaSeguent.getTime() - ara.getTime());
    }

    actTema(tema?: string | number) {

        if (typeof (tema) == "string") this.m.tema = tema;
        if (typeof (tema) == "number") this.m.tema = ["matinada", "mati", "tarda", "vespre", "nit"][tema - 1];

        $("html")
            .removeClass("dark light nit matinada mati tarda vespre")
            .addClass(this.m.modeFosc ? "dark" : "light")
            .addClass(this.m.tema);
    }


    // Funcions //
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.width = event.target.innerWidth;
    }
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.m.scroll = window.pageYOffset;
    }
}
