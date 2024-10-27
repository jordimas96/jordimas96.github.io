import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-indra',
    templateUrl: './indra.component.html',
    styleUrl: './indra.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
        SkillComponent,
    ]
})
export class IndraComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.indracompany.com/es/",
        es: "https://www.indracompany.com/es/",
        en: "https://www.indracompany.com/en/",
    };

    constructor(
        public m: MainService,
        public ts: ThemeService
    ) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
