import { Component } from '@angular/core';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { BioComponent } from './bio/bio.component';
import { ExperienciesHomeComponent } from './experiencies-home/experiencies-home.component';
import { FeinaActualComponent } from './feina-actual/feina-actual.component';
import { LlenguatgesProgramacioComponent } from './llenguatges-programacio-home/llenguatges-programacio-home.component';
import { ProjectesHomeComponent } from './projectes-home/projectes-home.component';
import { StatsComponent } from './stats/stats.component';

@Component({
    selector: 'jmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        ...SharedImports,
        BioComponent,
        FeinaActualComponent,
        ProjectesHomeComponent,
        ExperienciesHomeComponent,
        StatsComponent,
        LlenguatgesProgramacioComponent,
        BotonsNavegacioPaginaComponent,
    ]
})
export class HomePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Home";
    }

}
