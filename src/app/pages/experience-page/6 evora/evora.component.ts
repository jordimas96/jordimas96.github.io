import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrl: './evora.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class EvoraComponent {
    Skills = Skills;

    public links = {
        ca: "https://www.evorait.com/",
        es: "https://www.evorait.com/",
        en: "https://www.evorait.com/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
