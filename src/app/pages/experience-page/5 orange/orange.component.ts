import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-orange',
    templateUrl: './orange.component.html',
    styleUrl: './orange.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class OrangeComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.orange.es/empresas/grandes-empresas",
        es: "https://www.orange.es/empresas/grandes-empresas",
        en: "https://www.orange.es/empresas/grandes-empresas",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
