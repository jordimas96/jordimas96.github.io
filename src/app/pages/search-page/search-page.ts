import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skill } from 'src/app/enums/skill.enum';
import { PageComponent } from 'src/app/pages/page.component';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-search-page',
    templateUrl: './search-page.html',
    styleUrl: './search-page.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
        PreviewCaseStudyComponent,
    ]
})
export class SearchPageComponent extends PageComponent implements OnInit, AfterViewInit {

    public route = inject(ActivatedRoute);
    public router = inject(Router);
    
    @ViewChild("input") input: ElementRef<HTMLInputElement>;

    Skill = Skill;
    
    private readonly llistaSkills: [string, string][] = Object.entries(Skill)
        .filter(([k, v]) => k != "_TOTAL")
        .map(([k, v]) => [k, v.toLowerCase()]);

    private _query = "";
    public resultats: { skills?: [] } = {};

    
    public hiHaResultats = false;

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
            this.hiHaResultats = false;
            return;
        }
        const query = this.query.trim().toLowerCase();

        let skills = this.llistaSkills.filter(([k, v]) => v.includes(query));

        if (skills.length) resultats["skills"] = skills;

        this.resultats = resultats;
        this.hiHaResultats = !!Object.keys(resultats).length;
    }



}
