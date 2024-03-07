import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { AppbarComponent } from "../components/appbar/appbar.component";
import { Utils } from "../shared/utils";

// https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/ //

enum Area { Front, Back, Full };

@Injectable({
    providedIn: 'root'
})
export class MainService {
    // Components //
    public appbar!: AppbarComponent;

    // Services //
    public u;

    // Variables //
    public tempsDelayCarregaPag = 1000;
    public readonly debug = window.location.origin.includes("localhost") || window.location.origin.includes("192.168.1.");
    public modeFosc: boolean = true;
    public tema: string = "";
    public scroll = window.pageYOffset;
    public fragment = "";

    public area: Area;
    public areaCodi = "web"; // web, info, details //
    public discret = 0;

    // Idiomes //
    public idioma: string = "en";
    public idiomaIndex: number = 2;
    public conjuncio: string = "and";
    public ca: boolean;
    public es: boolean;
    public en: boolean;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public gas: GoogleAnalyticsService
    ) {
        this.u = Utils; // TODO: pendent de portar a dalt
        
        // Canviar icona NOMÉS al debugar //
        if (this.debug) {
            window["m"] = this;
            document.title = "Local";
            document.querySelector("link[rel*='icon']")!["href"] = "assets/favicon-local.png";
            document.body.style.overflowX = "visible";
        }
    }
    onInit() { }

    public llegirParams(route) {
        route.params.subscribe(params => {
            this.areaCodi = params["area"] || "web";

            // Segons el paràmetre, se'n va a una versió o a una altra de la web //
            switch (this.areaCodi) {
                case "web": this.area = Area.Front; break;
                case "info": this.area = Area.Back; break;
                case "details": this.area = Area.Full; break;
                default: this.router.navigate([`/${Utils.getRouteActual()}/web`]); return;
            }
        });
        route.fragment.subscribe(fragment => {
            if (fragment)
                this.fragment = fragment;
        })
    }

    // Idiomes //
    idiomaCanviat() {
        this.idiomaIndex = ["ca", "es", "en"].indexOf(this.idioma);
        this.conjuncio = ["i", "y", "and"][this.idiomaIndex];

        this.ca = this.idioma == "ca";
        this.es = this.idioma == "es";
        this.en = this.idioma == "en";
    }

    public log(t) { console.log(t); }
    public logDebug(t) { if (this.debug) console.log(t); }

    // Dispositius //
    // public esMobil() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    // public esPc() { return !this.esMobil() }
    public esMobil() { return this.esPantallaTactil() }
    public esPc() { return !this.esPantallaTactil() }
    public esPantallaMobil() { return this.appbar.width <= 576; }
    public esPantallaPc() { return !this.esPantallaMobil(); }
    public esAndroid() { return /Android/i.test(navigator.userAgent); }
    public esPantallaTactil() { return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)); }

    // Area de programació //
    public front() { return this.area == Area.Front }
    public back() { return this.area == Area.Back }
    public full() { return this.area == Area.Full }

    // Forçar temes - debug //
    public force(tema) { Utils.setCookieDays("forçartema", tema) }
    public noforce() { Utils.removeCookie("forçartema") }


    // Funcions //
    afterRootFadeIn(funcio: Function) {
        setTimeout(async () => {
            funcio();

            await Utils.wait(200)
            const element = document.getElementById(this.fragment);

            if (element)
                Utils.scroll(element.offsetTop - Utils.getAlturaAppbar() - 25);
                
        
        }, $("app-root").is(":visible") ? 0 : this.tempsDelayCarregaPag); // Retard fadein pagina //
    }

}
