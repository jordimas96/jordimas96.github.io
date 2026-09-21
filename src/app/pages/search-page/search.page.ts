import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { CASE_STUDIES, CaseStudyId } from 'src/app/data/case-studies.data';
import { Skill } from 'src/app/enums/skill.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    templateUrl: './search.page.html',
    styleUrl: './search.page.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
        PreviewCaseStudyComponent,
    ]
})
export class SearchPageComponent extends PageComponent implements OnInit, AfterViewInit {

    public route = inject(ActivatedRoute);
    public router = inject(Router);
    private exp = inject(ExperienceCalculatorService);
    
    @ViewChild("input") input: ElementRef<HTMLInputElement>;

    Skill = Skill;
    
    private readonly llistaSkills: [string, string][] = Object.entries(Skill)
        .filter(([k, v]) => k != "_TOTAL")
        .map(([k, v]) => [k, v.toLowerCase()]);

    private _query = "";
    public resultats: { skills?: [], caseStudies?: [] } = {};

    

    override async ngOnInit() {
        super.ngOnInit();


        
    }

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
        if (novaURL != "") novaURL = "/search/" + novaURL;
        else novaURL = "/search";

        window.history.replaceState({}, "", novaURL);
    }

    buscar() {
        let resultats = {};

        if (!this.query) {
            this.resultats = {};
            return;
        }
        const query = this.query.trim().toLowerCase();

        // Skills //
        let skills = this.llistaSkills.filter(([k, v]) => v.includes(query));
        if (skills.length) resultats["skills"] = skills;

        // Case studies //
        let caseStudiesTotals: string[] = [];
        // Temporal, ara llista només case studies que tinguin alguna de les skills trobades //
        if (skills.length) {
            const caseStudies = Object.entries(CASE_STUDIES).reverse()
                .filter(([key, caseStudy]) => {
                return caseStudy.skills.some(caseStudySkill =>
                    skills.some(skill => Skill[skill[0]] === caseStudySkill)
                );
            }).map(v => v[0]);

            const caseStudiesExperienceCalculator = [...this.exp.experiencia].reverse()
                .filter(empresa =>
                    skills.some(skill => empresa.skills.includes(Skill[skill[0]]))
                )
                .map(empresa => empresa.caseStudyId as CaseStudyId)
                .filter(Boolean);
            
            // Eliminar repetits //
            caseStudiesTotals = [...new Set([...caseStudies, ...caseStudiesExperienceCalculator])];
        }
        if (caseStudiesTotals.length) resultats["caseStudies"] = caseStudiesTotals;

        this.resultats = resultats;
    }



}
