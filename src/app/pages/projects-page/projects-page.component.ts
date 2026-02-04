import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
        RouterLink,
    ]
})
export class ProjectsPageComponent extends PageComponent {

    public frase: string[];

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Projects";

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
