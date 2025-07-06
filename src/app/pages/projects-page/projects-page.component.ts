import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
    ]
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
