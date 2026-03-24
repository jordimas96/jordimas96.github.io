import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-in2art-experience',
    templateUrl: './in2art-experience.component.html',
    styleUrl: './in2art-experience.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
        RouterLink,
    ]
})
export class In2artExperienceComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    get linkTitol() {
        return [
            "https://in2.art/Social/es-ca/",
            "https://in2.art/Social/es-es/",
            "https://in2.art/Social/en-uk/",
        ][this.m.idiomaIndex];
    }

}
