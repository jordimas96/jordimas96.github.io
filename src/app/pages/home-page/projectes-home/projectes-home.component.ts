import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-projectes-home',
    templateUrl: './projectes-home.component.html',
    styleUrl: './projectes-home.component.scss',
    imports: [
        RouterLink,
        ...SharedImports,
        MatRipple,
    ]
})
export class ProjectesHomeComponent {
    Skills = Skills;


    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) {
    }


    getSeeMoreText() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
