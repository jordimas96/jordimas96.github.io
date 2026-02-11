import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BotonsNavegacioPaginaComponent } from 'src/app/components/botons-navegacio-pagina/botons-navegacio-pagina.component';
import { PreviewCaseStudyComponent } from 'src/app/components/preview-case-study/preview-case-study.component';
import { PageComponent } from 'src/app/pages/page.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Seccio, SECCIONS } from 'src/app/shared/seccions';

@Component({
    selector: 'app-case-study-page',
    templateUrl: './case-study-page.component.html',
    styleUrl: './case-study-page.component.scss',
    imports: [
        ...SharedImports,
        PreviewCaseStudyComponent,
        BotonsNavegacioPaginaComponent,
    ]
})
export class CaseStudyPageComponent extends PageComponent {

    public seccio: Seccio;
    public altresSeccions: Seccio[];

    constructor(
        override m: MainService,
        public route: ActivatedRoute,
        public router: Router,
    ) {
        super(m);
    }

    override async ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe((params) => {

            let seccio = SECCIONS.find(s => s.nom == params["case-study"]); 
            if (!seccio) {
                this.router.navigateByUrl(this.router.url.split("/")[1]);
                return;
            }

            this.seccio = seccio;


            this.altresSeccions = SECCIONS
                .filter(s => s.pagina == seccio.pagina)
                .filter(s => s.nom != seccio.nom);


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
