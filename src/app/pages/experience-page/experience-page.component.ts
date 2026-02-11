import { Component } from '@angular/core';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
        BotonsNavegacioPaginaComponent,
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
