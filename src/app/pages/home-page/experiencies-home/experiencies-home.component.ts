import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-experiencies-home',
    templateUrl: './experiencies-home.component.html',
    styleUrl: './experiencies-home.component.scss',
    imports: [
        RouterLink,
        ...SharedImports,
        MatRipple,
    ]
})
export class ExperienciesHomeComponent {
    Skills = Skills;


    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) {
    }


    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
