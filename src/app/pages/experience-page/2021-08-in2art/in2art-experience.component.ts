import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-in2art-experience',
    templateUrl: './in2art-experience.component.html',
    styleUrl: './in2art-experience.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        LlistaSkills,
    ]
})
export class In2artExperienceComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get linkTitol() {
        return [
            "https://in2.art/Social/es-ca/",
            "https://in2.art/Social/es-es/",
            "https://in2.art/Social/en-uk/",
        ][this.m.idiomaIndex];
    }

    get urlImatgeUI() {
        return `/assets/_experience/in2art/in2art-${this.m.esPantallaPc ? "desktop" : "mobile"}.png`;
    }

}
