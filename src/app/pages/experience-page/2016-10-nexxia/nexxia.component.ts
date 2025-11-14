import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-nexxia',
    templateUrl: './nexxia.component.html',
    styleUrl: './nexxia.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class NexxiaComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    get linkTitol() {
        return [
            "https://www.nexxiasoft.com/?lang=ca",
            "https://www.nexxiasoft.com/?lang=es",
            "https://www.nexxiasoft.com/?lang=es",
        ][this.m.idiomaIndex];
    }

}
