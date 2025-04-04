import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-tecnocom',
    templateUrl: './tecnocom.component.html',
    styleUrl: './tecnocom.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class TecnocomComponent {
    Skills = Skills;

    public links = {
        ca: "https://www.indracompany.com/es/",
        es: "https://www.indracompany.com/es/",
        en: "https://www.indracompany.com/en/",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
