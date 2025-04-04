import { Injectable } from '@angular/core';
import { PeticioService } from 'src/app/services/peticio.service';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {

    constructor(public peticio: PeticioService) { }


    // Other projects //
    public getRepositorisGitHubProjects() {

        return new Promise<Array<any>>(resolve => {
            this.peticio.get(
                "https://api.github.com/users/jordimas96/repos",
                (data: Array<any>) => {
                    let repos = data.filter((e: any) => e.topics.includes("portfolio-other-projects"));
                    resolve(repos);
                },
                (error) => {
                    console.error(error);
                    resolve([]);
                }
            );
        });
    }

    public getReadme(repoName, idioma) {
        return new Promise<any>(resolve => {
            let nomArxiu = "";
            if (idioma == "en")
                nomArxiu = "README.md";
            else
                nomArxiu = `README.${idioma}.md`;

            this.peticio.getText(
                `https://raw.githubusercontent.com/jordimas96/${repoName}/main/${nomArxiu}`,
                (data: any) => {
                    resolve(data);
                },
                (error) => {
                    
                    if (idioma == "ca") {
                        console.log(`${repoName}: Readme file in %ccatalan%c not found, using %cspanish%c.`,
                            "color:gold", "", "color:orange", "");
                    }
                    if (idioma == "es") {
                        console.log(`${repoName}: Readme file in %cspanish%c not found, using %cenglish%c by default.`,
                            "color:orange", "", "color:deepskyblue", "");
                    }

                    resolve(null);
                }
            );
        });

    }

}
