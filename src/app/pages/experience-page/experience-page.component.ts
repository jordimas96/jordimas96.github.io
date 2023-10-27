import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

    constructor(public m: MainService, private route: ActivatedRoute) { m.llegirParams(this.route.params); }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Moviment i animació fons //
        $("body").css({ "background-position": "center center" });

        // Google Analytics //
        this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() {
        $(".ocult-animacio").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
        $("app-skill").each((i, e) => {
            Utils.fadeIn(e, i * 20 + 200);
        });
    }

}
