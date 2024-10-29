import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { BioComponent } from './bio/bio.component';
import { LanguagesComponent } from './languages/languages.component';
import { StatsComponent } from './stats/stats.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        RouterLink,
        BioComponent,
        StatsComponent,
        LanguagesComponent,
    ]
})
export class HomePageComponent extends PageComponent {
    
    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Home";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
