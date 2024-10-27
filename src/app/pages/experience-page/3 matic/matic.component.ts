import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-matic',
    templateUrl: './matic.component.html',
    styleUrl: './matic.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
        SkillComponent,
    ]
})
export class MaticComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.matic.cat/",
        es: "https://www.matic.cat/es/inicio/",
        en: "https://www.matic.cat/es/inicio/",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
