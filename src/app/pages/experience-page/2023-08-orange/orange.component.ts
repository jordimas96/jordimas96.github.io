import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-orange',
    templateUrl: './orange.component.html',
    styleUrl: './orange.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class OrangeComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get linkTitol() {
        return [
            "https://www.orange.es/empresas/grandes-empresas",
            "https://www.orange.es/empresas/grandes-empresas",
            "https://www.orange.es/empresas/grandes-empresas",
        ][this.m.idiomaIndex];
    }

}
