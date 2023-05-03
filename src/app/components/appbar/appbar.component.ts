import { Component, HostListener } from '@angular/core';
import { Utils } from './../../services/utils.service';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';


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
        
        this.setDarkMode();

        this.setTemaSegonsHora();


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

    setDarkMode() {
        // Establir variable dark mode //
        this.m.modeFosc = !!parseInt(Utils.getCookie("darkmode"));
        
        // Si no te cookie el traiem de system //
        if (!Utils.hasCookie("darkmode"))
            this.m.modeFosc = Utils.systemDarkMode();
    }
    
    setTemaSegonsHora(horaActual = new Date().getHours()) {
        if (Utils.hasCookie("forçartema")) { this.m.tema = Utils.getCookie("forçartema"); return; }
        
        // this.m.tema = "tarda"; return;
        
        // Colors matinada, matí, tarda, vespre, nit //
        const primeraHoraNit = 1;
        const primeraHoraMatinada = 6;
        const primeraHoraMati = 9;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 20;
        
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

        setTimeout(() => {
            this.setTemaSegonsHora((ara.getHours() + 1) % 24);
            this.actTema();
        }, horaSeguent.getTime() - ara.getTime());
    }

    actTema() {
        $("html")
            .removeClass("dark light nit matinada mati tarda vespre")
            .addClass(this.m.modeFosc ? "dark" : "light")
            .addClass(this.m.tema);
    }

    // Idioma //
    establirIdiomaDefecte() {
        // Detectar idioma i guardar-lo //
        this.m.idioma = Utils.getCookie("lang") || navigator.language.split("-")[0];
        
        // Si l'idioma detectat no es al select, el posem a anglès //
        if (!Utils.arrayConte($("#idioma > option").map((i, e) => $(e).val()).toArray(), this.m.idioma))
            $("#idioma").val("en");
    }
    setCookieIdioma() {
        Utils.setCookie("lang", this.m.idioma);
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

    mostrarOmbra() {
        return !this.m.modeFosc && this.scrolled();
    }
    scrolled() {
        return this.m.scroll > 0;
    }
}
