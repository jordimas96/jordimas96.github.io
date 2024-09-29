import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrls: ['./custom-roms.component.scss', '../projects-page.scss']
})
export class CustomRomsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
