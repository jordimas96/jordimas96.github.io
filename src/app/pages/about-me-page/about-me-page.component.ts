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
        StoriesComponent
    ]
})
export class AboutMePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - About me";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
