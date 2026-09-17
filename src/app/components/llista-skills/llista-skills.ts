import { Component, inject, Input } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skill } from 'src/app/enums/skill.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-llista-skills',
    templateUrl: './llista-skills.html',
    styleUrl: './llista-skills.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class LlistaSkills {

    public m = inject(MainService);


    @Input("skills") skills: Skill[];

};
