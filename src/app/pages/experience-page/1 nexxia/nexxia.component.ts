import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-nexxia',
    templateUrl: './nexxia.component.html',
    styleUrl: './nexxia.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class NexxiaComponent {
    Skills = Skills;

    public links = {
        ca: "https://www.nexxiasoft.com/?lang=ca",
        es: "https://www.nexxiasoft.com/?lang=es",
        en: "https://www.nexxiasoft.com/?lang=es",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
