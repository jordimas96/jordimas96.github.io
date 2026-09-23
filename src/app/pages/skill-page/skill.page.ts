import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { CASE_STUDIES, CaseStudyId } from 'src/app/data/case-studies.data';
import { Skill, SkillText } from 'src/app/data/skills.data';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    templateUrl: './skill.page.html',
    styleUrls: ['./skill.page.scss', '../../components/skill/skill-colors.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
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

    SkillText = SkillText;

    public skill: Skill;
    public caseStudies: CaseStudyId[];

    override async ngOnInit() {
        super.ngOnInit();

        const skillUrl = this.route.snapshot.paramMap.get('skill');

        const existeix = Object.values(Skill).filter(s => s != Skill._TOTAL).some(v => v == skillUrl);

        // Si no existeix la skill, anem a /xxxx //
        if (!existeix) {
            this.router.navigate(['/' + skillUrl]);
            return;
        }

        this.skill = skillUrl as Skill;

        this.buscarCaseStudies();
    }

    buscarCaseStudies() {
        const caseStudies: CaseStudyId[] = Object.entries(CASE_STUDIES)
            .filter(([key, caseStudy]) => caseStudy.skills.includes(this.skill))
            .sort(([, cs1], [, cs2]) => cs2.prioritat - cs1.prioritat)
            .map(([key, caseStudy]) => key);
        
        const caseStudiesExperienceCalculator: CaseStudyId[] = this.exp.experiencia
            .filter(empresa => empresa.caseStudyId).reverse() // Eliminem empreses sense caseStudyId //
            .filter(empresa => empresa.skills.includes(this.skill))
            .map(empresa => empresa.caseStudyId as CaseStudyId);
        
        // Eliminar repetits //
        this.caseStudies = [...new Set([...caseStudies, ...caseStudiesExperienceCalculator])]
    }

    previewClass(numElem: number) {
        if (numElem == 1)       return "col-12 col-md-8";
        else if (numElem == 2)  return "col-12 col-md-6";
        else                    return "col-12 col-md-6 col-xl-4";
    }


    getTextTooltip() {
        const aLesSeguentsEmpresesIProjectes = [
            "a les següents empreses i projectes:",
            "en las siguientes empresas y proyectos:",
            "at the following companies and projects:"
        ][this.m.idiomaIndex];
        const alsSeguentsProjectes = [
            "En els següents projectes personals:",
            "En los siguientes proyectos personales:",
            "In the following personal projects:"
        ][this.m.idiomaIndex];
        const nomesEnProjectesPersonals = [
            "Només en projectes personals",
            "Sólo en proyectos personales",
            "Personal projects only"
        ][this.m.idiomaIndex];
        
        let infoCompletaSkill = this.exp.skills[this.skill] || { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };
        if (infoCompletaSkill?.empreses?.length) {
            return this.getText_anysMesosDies(infoCompletaSkill.anysMesosDies) + // 2 years, 6 months and 9 days //
                (this.caseStudies.length ? "\n" + aLesSeguentsEmpresesIProjectes : "");
        } else {
            return this.caseStudies.length ? alsSeguentsProjectes : nomesEnProjectesPersonals;
        }
    }
    getText_anysMesosDies(anysMesosDies) {
        return this.exp.construirCadenaTempsExp(anysMesosDies);
    }


    get experienciaEn_string() {
        return ["Experiència en", "Experiencia en", "Experience in"][this.m.idiomaIndex];
    }



}
