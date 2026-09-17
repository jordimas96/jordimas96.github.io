import { Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { AboutComponent } from './about/about.component';
import { DemosComponent } from './demos/demos.component';
import { FuncionalitatsComponent } from './funcionalitats/funcionalitats.component';

@Component({
    selector: 'jmp-in2art',
    templateUrl: './in2art.component.html',
    styleUrl: './in2art.component.scss',
    imports: [
        ...SharedImports,
        DemosComponent,
        FuncionalitatsComponent,
        AboutComponent,
        LlistaSkills,
    ]
})
export class In2artComponent {
    
    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get linkTitol() {
        return [
            "https://in2.art/Social/es-ca/",
            "https://in2.art/Social/es-es/",
            "https://in2.art/Social/en-uk/",
        ][this.m.idiomaIndex];
    }

}
