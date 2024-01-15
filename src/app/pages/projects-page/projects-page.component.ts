import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

    constructor(public m: MainService, private route: ActivatedRoute) { m.llegirParams(this.route.params); }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Moviment i animació fons //
        $("body").css({ "background-position": "bottom right" });

        // Google Analytics //
        this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() {
        $(".ocult-animacio:not(.group):not(.chip)").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
        

    }


}
