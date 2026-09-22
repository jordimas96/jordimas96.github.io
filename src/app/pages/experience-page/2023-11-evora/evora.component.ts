import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-evora',
    templateUrl: './evora.component.html',
    styleUrl: './evora.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class EvoraComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    public readonly rutaImgMaquina = "assets/_experience/evora/maquina-evora.png";
    public readonly rutaImgMigracio = "assets/_experience/evora/angular-12-a-17.png";

}
