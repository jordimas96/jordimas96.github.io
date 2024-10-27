import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrl: './evora.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
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
