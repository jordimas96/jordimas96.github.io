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
    @Input("showTime") showTime: boolean;
    @Input("ampladaNom") ampladaNom: number;

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
    getTextCurt(skill: string) {
        if (!this.m.exp.experienciaPerSkills[skill])
            return "";
        else
            return this.m.exp.construirCadenaTempsExpCurta(this.m.exp.experienciaPerSkills[skill].anysMesosDies);
    }
    getNivellBarra() {
        return (this.m.exp.getSkill(this.nom).diesTotals || 0) / this.m.exp.getSkill("_total").diesTotals * 100;
    }
};
