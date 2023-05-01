import { HostListener, Injectable } from "@angular/core";
import { AppbarComponent } from "../components/appbar/appbar.component";
import { Utils } from "./utils.service";


// https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/ //

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
    public readonly debug = window.location.origin == "http://localhost:4200";
    public modeFosc: boolean = true;
    public tema: string = "";
    public idioma: string = "en";
    public scroll = window.pageYOffset;

    constructor() {
        this.u = Utils;
        
        // NOMÉS per poder debugar //
        if (this.debug)
            window["m"] = this;
    }
    onInit() { }


    ca() { return this.idioma == "ca" }
    es() { return this.idioma == "es" }
    en() { return this.idioma == "en" }

    public log(t) { console.log(t); }
    public logDebug(t) { if (this.debug) console.log(t); }
    public esMobil() { return this.appbar.width <= 576; }
    public esPc() { return !this.esMobil(); }

    public force(tema) { Utils.setCookie("forçartema", tema) }
    public noforce() { Utils.removeCookie("forçartema") }

    // Funcions //
    afterRootFadeIn(funcio: Function) {
        setTimeout(() => {
            funcio();
        }, $("app-root").is(":visible") ? 0 : this.tempsDelayCarregaPag); // Retard fadein pagina //
    }

}
