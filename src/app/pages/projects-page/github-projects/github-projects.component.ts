import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { ProviderService } from 'src/app/services/provider.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-github-projects',
    templateUrl: './github-projects.component.html',
    styleUrl: './github-projects.component.scss',
    imports: [
        ...SharedImports,
        NgxMasonryModule,
        SkillComponent,
        MatProgressSpinnerModule,
        StoryComponent,
    ]
})
export class GithubProjectsComponent implements OnInit {
    Skills = Skills;

    @ViewChild("masonry") masonry: NgxMasonryComponent;

    public readonly USE_CACHE = true;

    public repos: Array<any>;

    public masonryReady = false;

    constructor(
        public m: MainService,
        public ts: ThemeService,
        public ps: ProviderService,
    ) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(() => {
            this.carregarInfoProjects();
        });
    }


    onLayoutComplete() {
        setTimeout(() => {
            this.masonryReady = true;
        }, 300);
    }


    async carregarInfoProjects() {

        // The api of GitHub only lets 60 queries for hour for unauthenticated users //
        // Si n'hi ha, carreguem des de caché //
        if (this.USE_CACHE) {
            this.repos = JSON.parse(Utils.getCookie("otherProjects_info") || <any>null);
            if (this.repos) {
                console.log("Content of \"other projects\" loaded from cache");
                return;
            }
        }


        // Si no, ho creem //
        let repos = [
            {
                name: "bunquer-descarregador",
                title: "Descarregador de capítols d'El Búnquer",
                cardHue: 346,
                text: {
                    ca: "Eina que permet descarregar fàcilment tots els episodis del programa de radio El Búnquer, de Catalunya Ràdio. Permet buscar episodis i reproduir-los o descarregar-los individualment o en bloc. Mostra el temps estimat de descàrrega, pes total i barra de progrés amb temps restant. Aquesta web no allotja els arxius.",
                    es: "Herramienta que permite descargar fácilmente todos los episodios del programa de radio El Búnquer, de Catalunya Ràdio. Permite buscar episodios y reproducirlos o descargarlos individualmente o en bloque. Muestra el tiempo estimado de descarga, peso total y barra de progreso con tiempo restante. Esta web no aloja los archivos.",
                    en: "Tool that allows you to easily download all episodes of the radio program El Búnquer, from Catalunya Ràdio. It allows you to search for episodes and play or download them individually or in bulk. It shows the estimated download time, total weight and progress bar with remaining time. This web does not host the files.",
                }
            },
            {
                name: "rounded-corners-directive",
                cardHue: 160
            },
            {
                name: "navigation-tab",
                cardHue: 275
            },
            {
                name: "color-harmonizer",
                cardHue: 251
            },
            {
                name: "uniform-luminosity-palette",
                cardHue: 300,
                text: {
                    ca: "Algunes proves per obtenir una funció SCSS que, donat un (to, sat, llum) pugui generar un color, no basat en la llum de l'HSL, sinó en la llum percebuda.",
                    es: "Algunas pruebas para obtener una función SCSS que, dado un (tono, sat, lum) pueda generar un color, no basado en la luz del hsl, sino basado en la luz percibida",
                    en: "Some tests to get a SCSS function that, given a (hue, sat, lum) can generate a color, not based on the light of the hsl, but based on the perceived light",
                }
            },
            {
                name: "icon-editor-2016",
                title: "Icon editor (2016)",
                cardHue: 360
            },
            {
                name: "electricity-rate-2016",
                title: "Electricity rate (2016)",
                cardHue: 87
            },
            {
                name: "meme-generator-2016",
                title: "Meme generator (2016)",
                cardHue: 21
            },
            {
                name: "evorait-task_materials_ngrx",
                title: "NgRx materials task",
                cardHue: 201
            }
        ];

        this.repos = await Promise.all(repos.map(async (repo) => {

            return {
                title: repo.title || repo.name.replace(/[-_]+/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
                text: await this.getReadmes(repo.name),
                url: `https://jordimas96.github.io/${repo.name}`,
                iconUrl: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
                iconUrlBackup: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/favicon.ico`,
                ...repo,
            }
        }));

        Utils.setCookie("otherProjects_info", JSON.stringify(this.repos), 60);

    }


    async getReadmes(repoName: string) {

        let [ca, es, en] = await Promise.all([
            this.ps.getReadme(repoName, "ca"),
            this.ps.getReadme(repoName, "es"),
            this.ps.getReadme(repoName, "en"),
        ]);

        if (!es) es = en;
        if (!ca) ca = es;

        ca = this.processarReadme(ca || "");
        es = this.processarReadme(es || "");
        en = this.processarReadme(en || "");

        return { ca, es, en };
    }

    processarReadme(text: string) {
        // Eliminar possible tag description //
        let splitedText = text.split("[//]: # (Description)");
        text = splitedText[splitedText.length - 1];

        // Eliminar possible titol //
        text = text.replace(/^# .*\n?/, '');

        return text.trim();
    }

    onImgLogoError(repo) {
        repo.iconUrl = repo.iconUrlBackup;
        repo.iconUrlBackup = null;
        this.masonry.layout();
    }

}
