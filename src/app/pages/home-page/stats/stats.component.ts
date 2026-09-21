import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/enums/skill.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-stats',
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class StatsComponent {

    public m = inject(MainService);
    public exp = inject(ExperienceCalculatorService);
    private router = inject(Router);

    Skill = Skill;

    getText(skill: Skill) {
        let text = this.exp.construirCadenaTempsExp_anysMesos(this.exp.skills[skill].anysMesosDies);
        text = text.replace(/\d+/g, (num) => `<span class="num">${num}</span>`);
        return text;
    }

    goToSkill(skill: string) {
        this.router.navigate(["/skill", skill.toLowerCase()]);
    }

}
