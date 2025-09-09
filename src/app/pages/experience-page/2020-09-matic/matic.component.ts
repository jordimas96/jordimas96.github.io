import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-matic',
    templateUrl: './matic.component.html',
    styleUrl: './matic.component.scss',
    imports: [
        ...SharedImports,
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

    getLink1() {
        return [
            "assets/documents/matic/smart-counting-cat.pdf",
            "assets/documents/matic/smart-counting-esp.pdf",
            "assets/documents/matic/smart-counting-esp.pdf",
        ][this.m.idiomaIndex];
    }
    getLink2() {
        return "assets/documents/matic/captura-mobil.jpg";
    }

}
