import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-about-me-page',
    templateUrl: './about-me-page.component.html',
    styleUrl: './about-me-page.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        RouterLink,
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
