import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { MadJumpgateGameplayComponent } from './mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './mad-jumpgate-joc/mad-jumpgate-joc.component';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrl: './mad-jumpgate.component.scss',
    imports: [
        ...SharedImports,
        MadJumpgateJocComponent,
        MadJumpgateGameplayComponent,
        SkillComponent,
    ]
})
export class MadJumpgateComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
