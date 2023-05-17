import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

    public links = {
        in2art: { ca: "https://in2.art/es", es: "https://in2.art/es", en: "https://in2.art/en" },
        matic: { ca: "https://www.matic.cat/", es: "https://www.matic.cat/es/inicio/", en: "https://www.matic.cat/es/inicio/" },
        indra: { ca: "https://www.indracompany.com/es/", es: "https://www.indracompany.com/es/", en: "https://www.indracompany.com/en/" },
        nexxia: { ca: "https://www.nexxiasoft.com/?lang=ca", es: "https://www.nexxiasoft.com/?lang=es", en: "https://www.nexxiasoft.com/?lang=es" },
    };
    

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Google Analytics //
        this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() {
        $(".content>.ocult-animacio").each((i, e) => {
            Utils.fadeIn(e, i * 50);
        });
        $("app-skill").each((i, e) => {
            Utils.fadeIn(e, i * 20);
        });
    }
    getLink(nom) {
        return this.links[nom][this.m.idioma];
    }

}
