import { Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-bunquer',
    templateUrl: './bunquer.component.html',
    styleUrl: './bunquer.component.scss',
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class BunquerComponent {
    
    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

}
