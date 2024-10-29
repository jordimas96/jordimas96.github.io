import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-alvea',
    templateUrl: './alvea.component.html',
    styleUrl: './alvea.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class AlveaComponent {
    Skills = Skills;

    public links = {
        ca: "https://alvea.es/",
        es: "https://alvea.es/",
        en: "https://alvea.es/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
