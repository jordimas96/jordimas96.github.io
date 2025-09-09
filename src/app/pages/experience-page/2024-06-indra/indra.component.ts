import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-indra',
    templateUrl: './indra.component.html',
    styleUrl: './indra.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class IndraComponent {
    Skills = Skills;

    public links = {
        ca: "https://alvea.es/",
        es: "https://alvea.es/",
        en: "https://alvea.es/",
    }

    constructor(
        public m: MainService,
        public ts: ThemeService
    ) { }

    getLink() {
        return this.links[this.m.idioma];
    }

    getLinkDintelHome() {
        return [
            "https://dintel.redsara.es/",
            "https://dintel.redsara.es/",
            "https://dintel.redsara.es/content/dintel/en/inicio.html",
        ][this.m.idiomaIndex];
    }
    getLinkDintelComponents() {
        return [
            "https://dintel.redsara.es/componentes",
            "https://dintel.redsara.es/componentes",
            "https://dintel.redsara.es/content/dintel/en/componentes.html",
        ][this.m.idiomaIndex];
    }

}
