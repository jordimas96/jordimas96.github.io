import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    constructor(public m: MainService) { }

    @Input("n") nom: string;

    nomAClasse(s) {
        return s
            .normalize()
            .toLowerCase()
            .replaceAll("#", "sharp")
            .replaceAll("/", "")
            .replaceAll(" ", "")
    }
    buscarGoogle(s) {
        s = s
            .replaceAll(" ", "+")
            .replaceAll("#", "sharp");
        
        s = `https://www.google.com/search?btnI&q=${s}`;
        window.open(s, "_blank");
    }

    getAnysExp() {
        let n = {
            "angular": 2.5,
            "jquery": 4,
            "javascript": 4,
            "css": 4,
        }[this.nomAClasse(this.nom)] || "";
        if (!n) return "";
        else {
            return [
                `${n} anys d'experiència`,
                `${n} años de experiencia`,
                `${n} experience years`,
            ][this.m.idiomaIndex];
        }
    }
}
