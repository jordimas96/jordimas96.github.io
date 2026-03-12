import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-evora',
    templateUrl: './evora.component.html',
    styleUrl: './evora.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class EvoraComponent {
    Skills = Skills;

    public readonly rutaImgMaquina = "assets/_experience/evora/maquina-evora.png";
    public readonly rutaImgMigracio = "assets/_experience/evora/angular-12-a-17.png";

    constructor(public m: MainService) { }

}
