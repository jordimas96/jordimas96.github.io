import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { CASE_STUDIES, CaseStudyId } from 'src/app/data/case-studies.data';
import { Skill } from 'src/app/enums/skill.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    templateUrl: './skill.page.html',
    styleUrls: ['./skill.page.scss', '../../components/skill/skill-colors.component.scss'],
    imports: [
        ...SharedImports,
        SkillComponent,
        PreviewCaseStudyComponent,
    ]
})
export class SkillPageComponent extends PageComponent implements OnInit {

    public route = inject(ActivatedRoute);
    public router = inject(Router);
    private exp = inject(ExperienceCalculatorService);

    Skill = Skill;

    public skill: Skill;
    public caseStudies: CaseStudyId[];

    public skillInfoCardClass = "";

    override async ngOnInit() {
        super.ngOnInit();

        const skillUrl = this.route.snapshot.paramMap.get('skill');

        const skillKey = Object.keys(Skill)
            .find(key => key.toLowerCase() === skillUrl);

        if (!skillKey) {
            this.router.navigate(['/' + skillUrl]);
            return;
        }

        this.skill = Skill[skillKey as keyof typeof Skill];
        this.skillInfoCardClass = skillUrl ?? "";

        this.buscarCaseStudies();
    }

    buscarCaseStudies() {
        const caseStudies = Object.entries(CASE_STUDIES).reverse()
            .filter(([key, caseStudy]) => (caseStudy.skills as Skill[]).includes(this.skill))
            .map((caseStudy) => caseStudy[0] as CaseStudyId);
        
        const caseStudiesExperienceCalculator = [...this.exp.experiencia].reverse()
            .filter(empresa => empresa.skills.includes(this.skill))
            .map(empresa => empresa.caseStudyId as CaseStudyId)
            .filter(Boolean);
        
        
        // Eliminar repetits //
        this.caseStudies = [...new Set([...caseStudies, ...caseStudiesExperienceCalculator])]
    }


    getTextTooltip() {
        let infoCompletaSkill = this.exp.skills[this.skill] || { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };
        if (infoCompletaSkill?.empreses?.length) {
            return this.getText_anysMesosDies(infoCompletaSkill.anysMesosDies) + // 2 years, 6 months and 9 days //
                "\n" + [
                    "a les següents empreses i projectes:",
                    "en las siguientes empresas y proyectos:",
                    "at the following companies and projects:"
                ][this.m.idiomaIndex]
        } else {
            return [
                "En els següents projectes personals:",
                "En los siguientes proyectos personales:",
                "In the following personal projects:"
            ][this.m.idiomaIndex];
        }
    }
    getText_anysMesosDies(anysMesosDies) {
        return this.exp.construirCadenaTempsExp(anysMesosDies);
    }


    get experienciaEn_string() {
        return ["Experiència en", "Experiencia en", "Experience in"][this.m.idiomaIndex];
    }



}
