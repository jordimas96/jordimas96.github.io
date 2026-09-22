import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { CASE_STUDIES, CaseStudy } from 'src/app/data/case-studies.data';
import { Seccio, SECCIONS } from 'src/app/data/seccions.data';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';

@Component({
    templateUrl: './case-study.page.html',
    styleUrl: './case-study.page.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
        BotonsNavegacioPaginaComponent,
    ]
})
export class CaseStudyPageComponent extends PageComponent {

    public route = inject(ActivatedRoute);
    public router = inject(Router);

    public seccio: Seccio;
    public altresSeccions: Seccio[];
    public caseStudy: CaseStudy;

    override async ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe((params) => {
            let pagina = this.route.snapshot.data["pagina"];
            let nom = params["case-study"];
            
            let seccio = SECCIONS.find(s => s.pagina == pagina && s.nomUrl == nom);

            // Si no existeix la seccio de la url (/projects/asd), vés a la pàgina anterior (/projects) //
            if (!seccio) {
                this.router.navigateByUrl(this.router.url.split("/")[1]);
                return;
            }

            this.seccio = seccio;
            this.caseStudy = CASE_STUDIES[seccio.id];


            this.altresSeccions = SECCIONS
                .filter(s => s.pagina == seccio.pagina)
                .filter(s => s.nomUrl != seccio.nomUrl);


        });
    }

    public get textAltresSeccions() {
        switch (this.seccio.pagina) {
            case "experience": return ["Altres experiències", "Otras experiencias", "Other experiences"][this.m.idiomaIndex];
            case "projects": return ["Altres projectes", "Otros proyectos", "Other projects"][this.m.idiomaIndex];
            case "art": return ["Altres projectes artístics", "Otros proyectos artísticos", "Other artistic projects"][this.m.idiomaIndex];
        }
    }
}
