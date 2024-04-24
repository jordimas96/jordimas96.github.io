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

    normalitzar(s) {
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
        return this.m.exp.getTextExp(this.nom);
    }
}
