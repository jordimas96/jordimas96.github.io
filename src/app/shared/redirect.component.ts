import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SECCIONS } from './seccions';

@Component({ template: '' })
export class RedirectComponent {

    constructor(private router: Router) {
        const url = this.router.url.replace(/^\//, '');

        let urlNova = this.canviarUrl(url);
        
        urlNova = urlNova!.replace(/^\//, '');

        this.redirigir(url, urlNova);
    }

    canviarUrl(url: string): string {

        
        // Buscar seccions //
        let seccio = SECCIONS.find(s => url == s.nom);
        if (seccio)
            return `${seccio.pagina}?priority=${seccio.nom}`;
        






        // Si no ha trobat res, anirem a home //
        return "";
    }

    redirigir(url: string, urlNova: string) {
        
        console.log(`Redirected from %c/${url}%c to %c/${urlNova}%c`,
            "color:#f60", "", "color:lime", "");

        const [path, queryString] = urlNova.split('?');
        const queryParams = Object.fromEntries(new URLSearchParams(queryString));
        this.router.navigate([path], { queryParams, replaceUrl: true });

    }
}
