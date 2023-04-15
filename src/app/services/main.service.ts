import { Injectable } from "@angular/core";
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
    public utils: Utils;

    // Variables //
    public tempsDelayCarregaPag = 1000;

    constructor() {
        this.utils = Utils;
    }
    onInit() { }


    ca() { return this.appbar.idioma == "ca" }
    es() { return this.appbar.idioma == "es" }
    en() { return this.appbar.idioma == "en" }

    public log(t) { console.log(t); }

}
