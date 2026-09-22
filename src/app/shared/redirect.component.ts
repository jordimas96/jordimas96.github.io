import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SECCIONS } from 'src/app/data/seccions.data';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class RedirectComponent {

    private router = inject(Router);

    constructor() {

        const url = this.router.url.replace(/^\//, '');

        let urlNova = this.canviarUrl(url);

        if (urlNova != null) {
            urlNova = urlNova!.replace(/^\//, '');

            this.redirigir(url, urlNova);
        }
        else {
            this.goToSearch(url);
        }
    }

    canviarUrl(url: string): string | null {

        // IN2ART //
        if (url == "in2art") return "/projects/in2art";
        if (url == "in2art-experience" || url == "in2art-exp") return "/experience/in2art";


        // Buscar seccions //
        let seccio = SECCIONS.find(s => url == s.nomUrl || url == s.nomUrl + "-info");
        if (seccio)
            return `/${seccio.pagina}/${seccio.nomUrl}`;



        // Si no ha trobat res, anirem a home //
        return null;
    }

    redirigir(url: string, urlNova: string) {
        console.log(`Redirected from %c/${url}%c to %c/${urlNova}%c`,
            "color:#f60", "", "color:lime", "");

        const [path, queryString] = urlNova.split('?');
        const queryParams = Object.fromEntries(new URLSearchParams(queryString));
        this.router.navigate([path], { queryParams, replaceUrl: true });
    }

    goToSearch(pathname: string) {
        let query =
            decodeURIComponent(pathname)
                .split("/")
                .filter(Boolean)
                .join(" ");
        
        this.router.navigate(["/search", query]);
    }
}
