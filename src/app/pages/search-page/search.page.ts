import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { CASE_STUDIES, CaseStudyId } from 'src/app/data/case-studies.data';
import { Skill, SkillText } from 'src/app/data/skills.data';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    templateUrl: './search.page.html',
    styleUrl: './search.page.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        SkillComponent,
        PreviewCaseStudyComponent,
    ]
})
export class SearchPageComponent extends PageComponent implements AfterViewInit {

    public route = inject(ActivatedRoute);
    public router = inject(Router);
    private exp = inject(ExperienceCalculatorService);
    
    @ViewChild("input") input: ElementRef<HTMLInputElement>;

    private readonly llistaSkillsTextos = Object.entries(SkillText)
        .filter(([key, text]) => key != Skill._TOTAL);

    private _query = "";
    public resultats: { skills?: Skill[], caseStudies?: CaseStudyId[] } = {};


    ngAfterViewInit() {
        this.query = this.route.snapshot.paramMap.get('query') ?? "";
        this.input.nativeElement.value = this.query;
    }

    get textPlaceholder() { return ["Cerca...", "Buscar...", "Search..."][this.m.idiomaIndex]; }

    set query(nouValor: string) {
        this._query = nouValor;
        this.actURL();

        this.buscar();
    }
    get query() { return this._query; }

    get hiHaResultats() {
        return !!Object.keys(this.resultats).length;
    }

    actURL() {
        let novaURL = this.query.trim().toLowerCase();
        if (!novaURL) novaURL = "/search";
        else novaURL = "/search/" + encodeURIComponent(novaURL);

        window.history.replaceState({}, "", novaURL);
    }

    buscar() {
        let resultats = {};

        const query = this.query.trim().toLowerCase();

        if (!query) {
            this.resultats = {};
            return;
        }

        // Skills //
        let skills: Skill[] = this.llistaSkillsTextos
            .filter(([key, text]) => text.toLowerCase().includes(query))
            .map(([key, text]) => key as Skill);
        if (skills.length) resultats["skills"] = skills;

        // Case studies //
        let caseStudiesTotals: CaseStudyId[] = [];
        // Temporal, ara llista només case studies que tinguin alguna de les skills trobades //
        if (skills.length) {
            const caseStudies: CaseStudyId[] = Object.entries(CASE_STUDIES).reverse()
                .filter(([key, caseStudy]) =>
                    caseStudy.skills.some(caseStudySkill =>
                        skills.some(skill => skill == caseStudySkill)
                    )
                ).map(([key, caseStudy]) => key as CaseStudyId);

            const caseStudiesExperienceCalculator: CaseStudyId[] = this.exp.experiencia
                .filter(empresa => empresa.caseStudyId).reverse() // Eliminem empreses sense caseStudyId //
                .filter(empresa =>
                    empresa.skills.some(empresaSkill =>
                        skills.some(skill => skill == empresaSkill)
                    )
                )
                .map(empresa => empresa.caseStudyId as CaseStudyId);
            
            // Eliminar repetits //
            caseStudiesTotals = [...new Set([...caseStudies, ...caseStudiesExperienceCalculator])];
        }
        if (caseStudiesTotals.length) resultats["caseStudies"] = caseStudiesTotals;

        this.resultats = resultats;
    }


    previewClass(numElem: number) {
        if (numElem == 1)       return "col-12 col-md-8";
        else if (numElem == 2)  return "col-12 col-md-6";
        else                    return "col-12 col-md-6 col-xl-4";
    }

}
