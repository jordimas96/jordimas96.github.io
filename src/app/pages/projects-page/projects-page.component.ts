import { Component } from '@angular/core';
import { Utils } from 'src/app/shared/utils';
import { PageComponent } from './../page/page.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        // Moviment i animació fons //
        $("body").css({ "background-position": "bottom right" });

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
