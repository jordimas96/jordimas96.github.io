import { Component, ElementRef } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { CardComponent } from '../../../components/card/card.component';
import { MainService } from './../../../services/main.service';

@Component({
    selector: 'app-other-projects',
    templateUrl: './other-projects.component.html',
    styleUrls: ['./other-projects.component.scss', '../projects-page.scss', '../../../components/card/card.scss']
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
        // this.repos = this.getRepos_MOCK(); return;
        
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
                "evorait-task_materials_ngrx": 201,
            };


            return {
                name: repo.name,
                nameFormated: repo.name.replace(/[-_]+/g, " "),
                text: await this.getReadmes(repo.name),
                url: `https://jordimas96.github.io/${repo.name}`,
                iconUrl: `https://raw.githubusercontent.com/jordimas96/${repo.name}/main/docs/favicon.ico`,
                order: repo.order,
                cardHue: huesPredefinits[repo.name] || [...repo.name].reduce((suma, v) => suma + v.charCodeAt(), 0) % 360,
            }
        }));
        console.log(this.repos);
        
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
        // 200 100 86 0.2 // ... 0.5 //
        let alfa = this.m.modeFosc ? 0.35 : 0.5;
        return `hsla(${hue}, 100%, 75%, ${alfa})`;
    }





    
    getRepos_MOCK() {
        return [
            {
                "name": "rounded-corners-directive",
                "nameFormated": "rounded corners directive",
                "text": {
                    "ca": "Aquest és un petit projecte per desenvolupar i provar una nova directiva per adaptar automàticament el border-radius dels fills perquè coincideixi amb el dels pares, calculant tots els espais pel camí.",
                    "es": "Éste es un pequeño proyecto para desarrollar y probar una nueva directiva para adaptar automáticamente el border-radius de los hijos para que coincida con el de los padres, calculando todos los espacios por el camino.",
                    "en": "This is a small website to develop and test a new directive for angular that will automatically adapt the border radius of the children to match the one from the parents, calculating all the spacing along the way."
                },
                "url": "https://jordimas96.github.io/rounded-corners-directive/",
                "iconUrl": "https://raw.githubusercontent.com/jordimas96/rounded-corners-directive/main/docs/favicon.ico",
                "order": 5
            },
            {
                "name": "evorait-task_materials_ngrx",
                "nameFormated": "evorait task materials ngrx",
                "text": {
                    "ca": "Una petita tasca que vaig fer amb Angular i NgRx per a una entrevista per a una empresa. Vaig utilitzar aquest projecte també per implementar les noves característiques d'Angular 17.",
                    "es": "Una pequeña tarea que hice con Angular y NgRx para una entrevista para una empresa. Utilicé este proyecto también para implementar las nuevas características de Angular 17.",
                    "en": "A small task I made with Angular and NgRx for an interview for a company. I used it also to implement the new features from Angular 17."
                },
                "url": "https://jordimas96.github.io/evorait-task_materials_ngrx/",
                "iconUrl": "https://raw.githubusercontent.com/jordimas96/evorait-task_materials_ngrx/main/docs/favicon.ico",
                "order": 20
            }
        ];
    }
    
}
