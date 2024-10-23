import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { MadJumpgateGameplayComponent } from './mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './mad-jumpgate-joc/mad-jumpgate-joc.component';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrls: ['./mad-jumpgate.component.scss', '../projects-page.scss'],
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
        MadJumpgateJocComponent,
        MadJumpgateGameplayComponent,
        SkillComponent,
    ]
})
export class MadJumpgateComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
