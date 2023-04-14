import { Component } from '@angular/core';
import { Utils } from './../../services/utils.service';
import * as $ from "jquery";


@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
    
    modeFosc: boolean = true;
    tema: string = "";
    idioma: string = "en";
    

    ngOnInit(): void {
        this.modeFosc = this.getDarkMode();

        this.tema = this.getTema();


        // Mostrar boto Dark Mode Auto si cal //
        if (Utils.hasCookie("darkmode")) $(".botoAutoMode").fadeIn(150);

        this.establirIdiomaDefecte();


        this.actTema();
    }

    btnDarkMode_click(): void {
        this.modeFosc = !this.modeFosc;
        this.actTema();
        Utils.setCookie("darkmode", this.modeFosc ? 1 : 0)
        $(".botoAutoMode").fadeIn(200);
    }

    btnAutoDarkMode_click(): void {
        this.modeFosc = Utils.systemDarkMode();
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
        const horaActual: number = new Date().getHours();

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
            .addClass(this.modeFosc ? "dark" : "light")
            .addClass(this.tema);
    }

    // Idioma //
    establirIdiomaDefecte() {
        // Establir idioma //
        this.idioma = Utils.getCookie("lang") || navigator.language.split("-")[0];
        
        // Valor per defecte //
        if (!Utils.arrayConte($("#idioma > option").map((i, e) => $(e).val()).toArray(), this.idioma))
            $("#idioma").val("en");
    }

    canviarIdioma(target) {
        this.idioma = (target as HTMLSelectElement).value;
        $("[lang=ca], [lang=es], [lang=en]").hide();
        $(`[lang=${this.idioma}]`).show();
        
    }
    setCookieIdioma() {
        Utils.setCookie("lang", this.idioma);
    }

    ca() { return this.idioma == "ca" }
    es() { return this.idioma == "es" }
    en() { return this.idioma == "en" }

}
