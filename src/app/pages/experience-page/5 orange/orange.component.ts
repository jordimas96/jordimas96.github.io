import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-orange',
    templateUrl: './orange.component.html',
    styleUrl: './orange.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
        SkillComponent,
    ]
})
export class OrangeComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.orange.es/empresas/grandes-empresas",
        es: "https://www.orange.es/empresas/grandes-empresas",
        en: "https://www.orange.es/empresas/grandes-empresas",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
