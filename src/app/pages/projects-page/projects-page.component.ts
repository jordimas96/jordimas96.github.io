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

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Projects";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
