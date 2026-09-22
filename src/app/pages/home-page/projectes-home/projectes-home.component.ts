import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-projectes-home',
    templateUrl: './projectes-home.component.html',
    styleUrl: './projectes-home.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
    ]
})
export class ProjectesHomeComponent {

    public m = inject(MainService);
    public exp = inject(ExperienceCalculatorService);

    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
