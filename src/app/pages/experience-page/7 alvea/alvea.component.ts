import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-alvea',
    templateUrl: './alvea.component.html',
    styleUrl: './alvea.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class AlveaComponent {
    Skills = Skills;

    public links = {
        ca: "https://alvea.es/",
        es: "https://alvea.es/",
        en: "https://alvea.es/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

    getLinkDintelHome() {
        return [
            "https://dintel.redsara.es/DINTEL/index.html",
            "https://dintel.redsara.es/DINTEL/index.html",
            "https://dintel.redsara.es/DINTEL/en/index.html",
        ][this.m.idiomaIndex];
    }
    getLinkDintelComponents() {
        return [
            "https://dintel.redsara.es/DINTEL/elementos-de-interfaz/componentes.html",
            "https://dintel.redsara.es/DINTEL/elementos-de-interfaz/componentes.html",
            "https://dintel.redsara.es/DINTEL/en/elementos-de-interfaz/componentes.html",
        ][this.m.idiomaIndex];
    }

}
