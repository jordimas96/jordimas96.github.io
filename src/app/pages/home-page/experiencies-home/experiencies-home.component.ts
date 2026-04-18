import { Component } from '@angular/core';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-experiencies-home',
    templateUrl: './experiencies-home.component.html',
    styleUrl: './experiencies-home.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
    ]
})
export class ExperienciesHomeComponent {
    Skills = Skills;


    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) {
    }


    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
