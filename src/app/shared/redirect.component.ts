import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SECCIONS } from './seccions';
import { MainService } from '../services/main.service';
import { Utils } from './utils';

@Component({ template: '' })
export class RedirectComponent {

    constructor(private router: Router) {
        const url = this.router.url.replace(/^\//, '');

        let urlNova = this.canviarUrl(url);
        
        urlNova = urlNova!.replace(/^\//, '');

        this.redirigir(url, urlNova);

        // Redirigir, si pel que fos seguís a la pàgina (no visor de PDF per exemple) //
        setTimeout(() => {
            this.redirigir("", "/");
        }, 100);
    }

    canviarUrl(url: string): string {

        
        // Buscar seccions //
        let seccio = SECCIONS.find(s => url == s.nom);
        if (seccio)
            return `${seccio.pagina}?priority=${seccio.nom}`;
        

        // CV //
        if (url == "cv") {
            let idioma = Utils.getCookie("lang");
            if (idioma)
                return `/assets/documents/CV/CV Jordi Mas Parramon ${idioma.toUpperCase()}.pdf`;
            else
                return `/assets/documents/CV/`;
            
        }




        // Si no ha trobat res, anirem a home //
        return "";
    }

    redirigir(url: string, urlNova: string) {
        const esRutaExterna = urlNova.startsWith("assets/") || urlNova.startsWith("/assets/");
        
        console.log(`Redirected from %c/${url}%c to %c/${urlNova}%c`,
            "color:#f60", "", "color:lime", "");
        
        if (esRutaExterna)
            window.location.href = urlNova;
        else {
            const [path, queryString] = urlNova.split('?');
            const queryParams = Object.fromEntries(new URLSearchParams(queryString));
            this.router.navigate([path], { queryParams, replaceUrl: true });
        }

    }
}
