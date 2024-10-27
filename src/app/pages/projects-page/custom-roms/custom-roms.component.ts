import { Component } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrl: './custom-roms.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
    ]
})
export class CustomRomsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
