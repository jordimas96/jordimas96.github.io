import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { BioComponent } from './bio/bio.component';
import { LanguagesComponent } from './languages/languages.component';
import { StatsComponent } from './stats/stats.component';
import { ExperienciesHomeComponent } from './experiencies-home/experiencies-home.component';
import { ProjectesHomeComponent } from './projectes-home/projectes-home.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        BioComponent,
        StatsComponent,
        ProjectesHomeComponent,
        ExperienciesHomeComponent,
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
