import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-tecnocom',
    templateUrl: './tecnocom.component.html',
    styleUrl: './tecnocom.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class TecnocomComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get linkTitol() {
        return [
            "https://www.indracompany.com/es/",
            "https://www.indracompany.com/es/",
            "https://www.indracompany.com/en/",
        ][this.m.idiomaIndex];
    }

}
