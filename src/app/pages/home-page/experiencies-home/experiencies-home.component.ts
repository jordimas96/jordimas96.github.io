import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-experiencies-home',
    templateUrl: './experiencies-home.component.html',
    styleUrl: './experiencies-home.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
    ]
})
export class ExperienciesHomeComponent {
    
    public m = inject(MainService);
    public exp = inject(ExperienceCalculatorService);

    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
