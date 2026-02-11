import { Component } from '@angular/core';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-art-page',
    templateUrl: './art-page.component.html',
    styleUrl: './art-page.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
        BotonsNavegacioPaginaComponent,
    ]
})
export class ArtPageComponent extends PageComponent {

    public frase: string[];

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Art";

        // Pròximament més //
        let llistaFrases = [
            ["Aviat nous projectes...", "Pronto nuevos proyectos...", "Soon new projects..."],
            ["Preparant alguna cosa nova...", "Preparando algo nuevo...", "Preparing something new..."],
            ["Més projectes en preparació...", "Más proyectos en preparación...", "More projects in preparation..."],
            ["Treballant en noves idees...", "Trabajando en nuevas ideas...", "Working on new ideas..."],
            ["Pròximament més...", "Próximamente más...", "Coming soon..."],
        ];
        this.frase = llistaFrases[Math.floor(Math.random() * llistaFrases.length)];

    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
