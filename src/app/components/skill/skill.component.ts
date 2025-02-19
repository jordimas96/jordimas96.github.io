import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrl: './skill.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class SkillComponent implements OnInit {

    @Input("skill") nom: Skills;
    @Input("showTime") showTime: boolean = false;

    public skill;
    public clau: string;
    public classe: string;

    constructor(
        public m: MainService,
        private el: ElementRef,
        private renderer: Renderer2,
        private exp: ExperienceCalculatorService
    ) { }

    ngOnInit(): void {

        this.skill = this.exp.skills[this.nom] || { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };

        this.clau = Object.keys(Skills)[Object.values(Skills).indexOf(this.nom)];
        this.classe = this.clau.toLowerCase();

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
        return this.exp.construirCadenaTempsExpCurta(this.skill?.anysMesosDies);
    }
    getText_anysMesosDies() {
        return this.exp.construirCadenaTempsExp(this.skill?.anysMesosDies);
    }
    getText_anysMesos() {
        return this.exp.construirCadenaTempsExp_anysMesos(this.skill?.anysMesosDies);
    }
    getNivellBarra() {
        return (this.skill?.diesTotals || 0) / this.exp.getSkill(Skills._TOTAL)?.diesTotals * 100;
    }
    getTextTooltip() {
        if (this.skill?.empreses?.length) {
            return this.getText_anysMesosDies() + // 2 years, 6 months and 9 days //
                "\n" +
                ["a", "en", "in"][this.m.idiomaIndex] + " " + // in //
                Utils.addConjunctionBetweenThe2Last(this.skill?.empreses, this.m.conjuncio); // Evora, Orange and In2art //
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
