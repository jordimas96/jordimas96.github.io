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
        this.repos = await this.ps.getRepositorisGitHubProjects();

        // Order repos by topics[]:"pop-order-X"

        this.repos = await Promise.all(this.repos.map(async (repo) => {
            
            return {
                name: repo.name,
                nameFormated: repo.name.replace(/[-_]+/g, " "),
                text: await this.getReadme(repo.name),
                url: repo.homepage,
                iconUrl: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
            }
        }));
        
    }


    async getReadme(repoName: string) {
        let idioma = this.m.idioma;

        let textReadme = await this.ps.getReadme(repoName, idioma);

        if (!textReadme && idioma != "en")
            textReadme = await this.ps.getReadme(repoName, "en");

        return this.processarReadme(textReadme || "");
    }

    processarReadme(text: string) {
        return text
            .replaceAll("\n", "")
            .split("[//]: # (Description)")[1] || "";
    }
    
}
