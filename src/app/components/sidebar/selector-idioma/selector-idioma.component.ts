import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-selector-idioma',
    templateUrl: './selector-idioma.component.html',
    styleUrls: ['./selector-idioma.component.scss']
})
export class SelectorIdiomaComponent {

    constructor(public m: MainService) { }
    
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
    }

    afterRootFadeIn() {
        this.establirIdiomaDefecte();
    }


    idiomaCanviat() {
        this.m.idiomaIndex = ["ca", "es", "en"].indexOf(this.m.idioma);
        this.m.conjuncio = ["i", "y", "and"][this.m.idiomaIndex];

        this.m.ca = this.m.idioma == "ca";
        this.m.es = this.m.idioma == "es";
        this.m.en = this.m.idioma == "en";
    }


    establirIdiomaDefecte() {
        // Detectar idioma i guardar-lo //
        this.m.idioma = Utils.getCookie("lang") || navigator.language.split("-")[0];
        
        // Si l'idioma detectat no es al select, el posem a anglès per defecte //
        if (!$("#idioma > option").toArray().map(e => $(e).val()).includes(this.m.idioma))
            this.m.idioma = "en";
        
        this.idiomaCanviat();
    }
    onIdiomaCanviat() {
        document.documentElement.lang = this.m.idioma;
        Utils.setCookieDays("lang", this.m.idioma);
        this.idiomaCanviat();
    }

}
