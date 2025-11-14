import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-orange',
    templateUrl: './orange.component.html',
    styleUrl: './orange.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class OrangeComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    get linkTitol() {
        return [
            "https://www.orange.es/empresas/grandes-empresas",
            "https://www.orange.es/empresas/grandes-empresas",
            "https://www.orange.es/empresas/grandes-empresas",
        ][this.m.idiomaIndex];
    }

}
