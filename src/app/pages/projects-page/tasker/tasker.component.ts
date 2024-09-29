import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-tasker',
    templateUrl: './tasker.component.html',
    styleUrls: ['./tasker.component.scss', '../projects-page.scss']
})
export class TaskerComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
