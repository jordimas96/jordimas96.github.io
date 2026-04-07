import { Component } from '@angular/core';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-feina-actual',
    templateUrl: './feina-actual.component.html',
    styleUrl: './feina-actual.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent
    ]
})
export class FeinaActualComponent {

    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) { }

    get textTitol() {
        let treballant = !this.exp.experiencia.at(-1)?.dates[1];

        const feinaActual = ["Feina actual", "Trabajo actual", "Current work"][this.m.idiomaIndex];
        const ultimaExperiencia = ["Última experiència", "Última experiencia", "Latest experience"][this.m.idiomaIndex];

        return treballant ? feinaActual : ultimaExperiencia;
    }

}
