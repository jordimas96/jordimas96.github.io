import { Component } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
    ]
})
export class StatsComponent {
    Skills = Skills;


    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) {
    }


    getText(skill: Skills) {
        return this.exp.construirCadenaTempsExp_anysMesos(this.exp.skills[skill].anysMesosDies);
    }

}
