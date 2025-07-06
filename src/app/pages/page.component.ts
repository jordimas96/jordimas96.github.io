import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Seccio, SECCIONS } from 'src/app/shared/seccions';

@Component({
    template: '',
    styleUrl: './page.scss',
    standalone: false
})
export class PageComponent {
    
    public seccionsPrioritat: Seccio[] = [];
    public seccions: Seccio[] = SECCIONS.filter(s => s.pagina == location.pathname);

    constructor(public m: MainService, public route: ActivatedRoute) {
        // Llegir paràmetre priority //
        this.route.queryParams.subscribe(params => {
            if (!params['priority']) return;
            let priorityNames = (params['priority'] || "").replace(/%20|\s/g, "").split(',');
            
            this.filtrarSeccionsPrioritat(priorityNames);
        });

        // Esborrar paràmetres si no es poden llegir //
        if (!this.seccionsPrioritat.length && location.search.includes('priority')) {
            if (m.debug) console.log("Url corregida:", location.pathname + location.search);
            const url = new URL(window.location.href);
            url.searchParams.delete('priority');
            window.history.replaceState({}, '', url.toString());
        }

        

        console.log(this.seccionsPrioritat, this.seccions);
    }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Google Analytics //
        if (!localStorage.getItem("googleAnalyticsBlocked"))
            this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() { }

    filtrarSeccionsPrioritat(priorityNames) {
        priorityNames.forEach(n => {
            const index = this.seccions.findIndex(s => s.nom == n);
            if (index < 0) return;
            const [trobada] = this.seccions.splice(index, 1);
            this.seccionsPrioritat.push(trobada);
        });
    }


}
