import { Component, ElementRef } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { CardComponent } from '../../../components/card/card.component';
import { MainService } from './../../../services/main.service';

@Component({
    selector: 'app-other-projects',
    templateUrl: './other-projects.component.html',
    styleUrls: ['./other-projects.component.scss', '../projects-page.scss']
})
export class OtherProjectsComponent extends CardComponent {

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

            return {
                name: repo.name,
                nameFormated: repo.name.replace(/[-_]+/g, " "),
                text: await this.getReadmes(repo.name),
                url: repo.homepage,
                iconUrl: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
                order: repo.order,
            }
        }));
        
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
    
}
