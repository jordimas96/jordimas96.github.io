import { Component, ElementRef } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { CardComponent } from '../../../components/card/card.component';
import { MainService } from './../../../services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-other-projects',
    templateUrl: './other-projects.component.html',
    styleUrls: ['./other-projects.component.scss', '../projects-page.scss', '../../../components/card/card.scss']
})
export class OtherProjectsComponent extends CardComponent {

    public readonly USE_CACHE = true;

    public repos: Array<any> = [];

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
        public ps: ProviderService,
    ) {
        super(m, rootElement);
    }

    override async ngOnInit() {
        super.ngOnInit();

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
                console.log("Content of other projects loaded from cache");
                return;
            }
        }

        
        // Si no, fem petició //
        let repos = await this.ps.getRepositorisGitHubProjects();

        // Order repos //
        repos.forEach((repo: any) => {

            let order: any = repo.topics.find((topic: string) => topic.startsWith("pop-order-"));
            
            if (order != null) {
                order = parseFloat(order.split("pop-order-")[1]);
                if (Number.isNaN(order))
                    order = null;
            }
            if (order == null)
                order = Infinity;

            repo.order = order;
        });
        repos.sort((a, b) => a.order - b.order);


        this.repos = await Promise.all(repos.map(async (repo) => {

            // Color card //
            let huesPredefinits = {
                "rounded-corners-directive": 160,
                "electricity-rate-2016": 87,
                "evorait-task_materials_ngrx": 201,
            };


            return {
                name: repo.name,
                nameFormated: repo.name.replace(/[-_]+/g, " "),
                text: await this.getReadmes(repo.name),
                url: `https://jordimas96.github.io/${repo.name}`,
                iconUrl1: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
                iconUrl2: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/favicon.ico`,
                order: repo.order,
                cardHue: huesPredefinits[repo.name] || [...repo.name].reduce((suma, v) => suma + v.charCodeAt(), 0) % 360,
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
        let alfa = this.m.modeFosc ? 0.35 : 0.5;
        return `hsla(${hue}, 100%, 75%, ${alfa})`;
    }
    
}
