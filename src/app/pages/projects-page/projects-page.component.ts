import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss', '../page.scss']
})
export class ProjectsPageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        // Moviment i animació fons //
        $("body").css({ "background-position": "bottom right" });

        // Google Analytics //
        if (!this.m.debug) this.m.gas.pageView(window.location.pathname);
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
