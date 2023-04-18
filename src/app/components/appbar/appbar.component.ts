import { Component } from '@angular/core';
import { Utils } from './../../services/utils.service';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
    

    constructor(public m: MainService) {
        m.appbar = this;
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
        this.m.modeFosc = this.getDarkMode();

        this.m.tema = this.getTema();


        // Mostrar boto Dark Mode Auto si cal //
        if (Utils.hasCookie("darkmode")) $(".botoAutoMode").fadeIn(150);

        this.establirIdiomaDefecte();


        this.actTema();

        setTimeout(() => { $("app-root").fadeIn(300); }, this.m.tempsDelayCarregaPag);
    }

    afterRootFadeIn() {
        Utils.fadeIn(".appbar", 200);
    }


    btnDarkMode_click() {
        this.m.modeFosc = !this.m.modeFosc;
        this.actTema();
        Utils.setCookie("darkmode", this.m.modeFosc ? 1 : 0)
        $(".botoAutoMode").fadeIn(200);
    }

    btnAutoDarkMode_click() {
        this.m.modeFosc = Utils.systemDarkMode();
        this.actTema();
        Utils.removeCookie("darkmode");
        $(".botoAutoMode").fadeOut(200);
    }

    getDarkMode() {
        // Establir variable dark mode //
        let modeFosc = !!parseInt(Utils.getCookie("darkmode"));
        
        // Si no te cookie el traiem de system //
        if (!Utils.hasCookie("darkmode"))
            modeFosc = Utils.systemDarkMode();
        
        return modeFosc;
    }
    
    getTema() {
        // Colors matinada, matí, tarda, vespre, nit //
        let horaActual: number = new Date().getHours();
        
        const primeraHoraNit: number = 1;
        const primeraHoraMatinada: number = 6;
        const primeraHoraMati: number = 9;
        const primeraHoraTarda: number = 15;
        const primeraHoraVespre: number = 20;

        if (horaActual >= primeraHoraNit && horaActual < primeraHoraMatinada)
            return "nit";
        else if (horaActual >= primeraHoraMatinada && horaActual < primeraHoraMati)
            return "matinada";
        else if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            return "mati";
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            return "tarda";
        else
            return "vespre";
    }

    actTema() {
        $("html")
            .removeClass()
            .addClass(this.m.modeFosc ? "dark" : "light")
            .addClass(this.m.tema);
    }

    // Idioma //
    establirIdiomaDefecte() {
        // Detectar idioma i guardar-lo //
        this.m.idioma = Utils.getCookie("lang") || navigator.language.split("-")[0];
        
        // Valor per defecte //
        if (!Utils.arrayConte($("#idioma > option").map((i, e) => $(e).val()).toArray(), this.m.idioma))
            $("#idioma").val("en");
    }
    setCookieIdioma() {
        Utils.setCookie("lang", this.m.idioma);
    }

}
