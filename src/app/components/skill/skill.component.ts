import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    constructor(
        public m: MainService,
        private el: ElementRef,
        private renderer: Renderer2,
        private exp: ExperienceCalculatorService
    ) { }

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
        return this.exp.getTextExp(this.nom);
    }
    getTextCurt() {
        if (!this.exp.getSkill(this.nom))
            return "";
        else
            return this.exp.construirCadenaTempsExpCurta(this.exp.getSkill(this.nom)?.anysMesosDies);
    }
    getText_anysMesosDies() {
        if (!this.exp.getSkill(this.nom))
            return "";
        else
            return this.exp.construirCadenaTempsExp(this.exp.getSkill(this.nom)?.anysMesosDies);
    }
    getText_anysMesos() {
        if (!this.exp.getSkill(this.nom))
            return "";
        else
            return this.exp.construirCadenaTempsExp_anysMesos(this.exp.getSkill(this.nom)?.anysMesosDies);
    }
    getNivellBarra() {
        return (this.exp.getSkill(this.nom)?.diesTotals || 0) / this.exp.getSkill("_total")?.diesTotals * 100;
    }
    getTextTooltip() {
        if (this.exp.getSkill(this.nom)?.empreses?.length) {
            return this.getText_anysMesosDies() + // 2 years, 6 months and 9 days //
                "\n" +
                ["en", "en", "in"][this.m.idiomaIndex] + " " + // in //
                Utils.addConjunctionBetweenThe2Last(this.exp.getSkill(this.nom)?.empreses, this.m.conjuncio); // Evora, Orange and In2art //
        } else {
            return [
                "Experiència només en projectes personals",
                "Experiencia sólo en proyectos personales",
                "Experience in personal projects only"
            ][this.m.idiomaIndex];
        }
    }

    correctTooltipPosition() {
        const tooltipCard = this.el.nativeElement.querySelector('.tooltip-card');
        const content = document.querySelector('.content');

        this.renderer.removeStyle(tooltipCard, "translate");
    
        if (tooltipCard && content) {
            const tooltipRect = tooltipCard.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();
    
            let offset = 0;
            if (tooltipRect.left < contentRect.left)
                offset = contentRect.left - tooltipRect.left;
            if (tooltipRect.right > contentRect.right)
                offset = contentRect.right - tooltipRect.right;

            if (offset)
                this.renderer.setStyle(tooltipCard, "translate", `${offset}px`);
            
        }
    }
    


    // Strings //
    experienciaEn_string() {
        return ["Experiència en", "Experiencia en", "Experience in"][this.m.idiomaIndex];
    }
    en_string() {
        return ["en", "en", "in"][this.m.idiomaIndex];
    }
};
