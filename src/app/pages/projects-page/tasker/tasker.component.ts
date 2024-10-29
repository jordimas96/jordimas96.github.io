import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-tasker',
    templateUrl: './tasker.component.html',
    styleUrl: './tasker.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class TaskerComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
