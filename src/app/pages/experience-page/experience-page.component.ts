import { Component } from '@angular/core';
import { Utils } from 'src/app/shared/utils';
import { PageComponent } from '../page/page.component';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        // Moviment i animació fons //
        $("body").css({ "background-position": "center center" });

        // Google Analytics //
        this.m.gas.pageView(window.location.pathname);
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();

        $(".ocult-animacio:not(.group):not(.chip)").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
    }

}
