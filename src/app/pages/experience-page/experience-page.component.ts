import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
    ]
})
export class ExperiencePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Experience";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
