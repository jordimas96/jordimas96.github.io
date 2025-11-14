import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrl: './evora.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class EvoraComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

}
