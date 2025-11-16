import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
    imports: [
        ...SharedImports,
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
        let text = this.exp.construirCadenaTempsExp_anysMesos(this.exp.skills[skill].anysMesosDies);
        text = text.replace(/\d+/g, (num) => `<span class="num">${num}</span>`);
        return text;
    }

}
