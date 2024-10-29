import { Component, OnInit } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { ProviderService } from 'src/app/services/provider.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-github-projects',
    templateUrl: './github-projects.component.html',
    styleUrl: './github-projects.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        NgxMasonryModule,
        SkillComponent
    ]
})
export class GithubProjectsComponent implements OnInit {
    Skills = Skills;

    public readonly USE_CACHE = true;

    public repos: Array<any> = [];

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
                "name": "rounded-corners-directive",
                "cardHue": 160
            },
            {
                "name": "navigation-tab",
                "cardHue": 265
            },
            {
                "name": "color-harmonizer",
                "cardHue": 261
            },
            {
                "name": "icon-editor-2016",
                "title": "icon editor (2016)",
                "cardHue": 360
            },
            {
                "name": "electricity-rate-2016",
                "title": "electricity rate (2016)",
                "cardHue": 87
            },
            {
                "name": "meme-generator-2016",
                "title": "meme generator (2016)",
                "cardHue": 21
            },
            {
                "name": "evorait-task_materials_ngrx",
                "title": "NgRx materials task",
                "cardHue": 201
            }
        ];

        this.repos = await Promise.all(repos.map(async (repo) => {

            return {
                ...repo,
                title: repo.title || repo.name.replace(/[-_]+/g, " "),
                text: await this.getReadmes(repo.name),
                url: `https://jordimas96.github.io/${repo.name}`,
                iconUrl: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
                iconUrlBackup: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/favicon.ico`,
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
        return text
            .replaceAll("\n", "")
            .split("[//]: # (Description)")[1] || "";
    }


    getColorRepoCards(hue) {
        let alfa = this.ts.modeFosc ? 0.35 : 0.5;
        return `hsla(${hue}, 100%, 75%, ${alfa})`;
    }
    getColorImgShadow(hue) {
        return `hsl(${hue}, 100%, 50%)`;
    }
    
}
