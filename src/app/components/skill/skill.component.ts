import { Component, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/enums/skill.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'jmp-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss', './skill-colors.component.scss'],
    imports: [
        ...SharedImports,
    ]
})
export class SkillComponent implements OnInit {
    
    public m = inject(MainService);
    public router = inject(Router);
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private exp = inject(ExperienceCalculatorService);


    @Input("skill") nom: Skill;
    @Input("showTime") showTime: boolean = false;

    public skill;
    public clau: string;
    public classe: string;

    ngOnInit(): void {

        this.skill = this.exp.skills[this.nom] || { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };

        this.clau = Object.keys(Skill)[Object.values(Skill).indexOf(this.nom)];
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
        return (this.skill?.diesTotals || 0) / this.exp.getSkill(Skill._TOTAL)?.diesTotals * 100;
    }
    getTextTooltip() {
        if (this.skill?.empreses?.length) {
            return this.getText_anysMesosDies() + // 2 years, 6 months and 9 days //
                "\n" +
                ["a", "en", "at"][this.m.idiomaIndex] + " " + // at //
                Utils.addConjunctionBetweenThe2Last(this.skill?.empreses, this.m.conjuncio); // Evora, Orange and IN2ART //
        } else {
            return [
                "Només en projectes personals",
                "Sólo en proyectos personales",
                "Personal projects only"
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


    obrirPaginaSkill() {
        this.router.navigate(["/skill", this.clau.toLowerCase()]);
    }



    // Strings //
    experienciaEn_string() {
        return ["Experiència en", "Experiencia en", "Experience in"][this.m.idiomaIndex];
    }
    en_string() {
        return ["en", "en", "in"][this.m.idiomaIndex];
    }
};
