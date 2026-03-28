import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { AboutComponent } from './about/about.component';
import { DemosComponent } from './demos/demos.component';
import { FuncionalitatsComponent } from './funcionalitats/funcionalitats.component';

@Component({
    selector: 'jmp-in2art',
    templateUrl: './in2art.component.html',
    styleUrl: './in2art.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
        DemosComponent,
        FuncionalitatsComponent,
        AboutComponent,
    ]
})
export class In2artComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    get linkTitol() {
        return [
            "https://in2.art/Social/es-ca/",
            "https://in2.art/Social/es-es/",
            "https://in2.art/Social/en-uk/",
        ][this.m.idiomaIndex];
    }

}
