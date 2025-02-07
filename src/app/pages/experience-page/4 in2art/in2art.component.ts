import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { DemosIn2artComponent } from './demos-in2art/demos-in2art.component';

@Component({
    selector: 'app-in2art',
    templateUrl: './in2art.component.html',
    styleUrl: './in2art.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
        DemosIn2artComponent
    ]
})
export class In2artComponent {
    Skills = Skills;

    public links = {
        ca: "https://in2.art/es",
        es: "https://in2.art/es",
        en: "https://in2.art/en",
    };

    public isDown = false; // I have no way to actually know it, just manually checking the web //

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
