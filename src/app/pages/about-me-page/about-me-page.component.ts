import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { StoriesComponent } from './stories/stories.component';

@Component({
    selector: 'app-about-me-page',
    templateUrl: './about-me-page.component.html',
    styleUrl: './about-me-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        StoriesComponent
    ]
})
export class AboutMePageComponent extends PageComponent {

    linkFitxaJoc = "https://jordimas96.github.io/mad-jumpgate";

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - About me";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
