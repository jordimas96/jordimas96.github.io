import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrl: './custom-roms.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class CustomRomsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
