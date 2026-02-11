import { Component } from '@angular/core';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { BioComponent } from './bio/bio.component';
import { ExperienciesHomeComponent } from './experiencies-home/experiencies-home.component';
import { LlenguatgesProgramacioComponent } from './llenguatges-programacio-home/llenguatges-programacio-home.component';
import { ProjectesHomeComponent } from './projectes-home/projectes-home.component';
import { StatsComponent } from './stats/stats.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        ...SharedImports,
        BioComponent,
        StatsComponent,
        ProjectesHomeComponent,
        ExperienciesHomeComponent,
        LlenguatgesProgramacioComponent,
        BotonsNavegacioPaginaComponent,
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
