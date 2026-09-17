import { inject, Injectable } from "@angular/core";
import { Skill as s, Skill } from 'src/app/enums/skill.enum';
import { MainService } from "./main.service";

@Injectable({
    providedIn: 'root'
})
export class ExperienceCalculatorService {

    public m = inject(MainService);

    public readonly experiencia = [
        { // DSET (Pràctiques) //
            nom: "DSET",
            dates: ["01-02-2016", "14-07-2016"],
            skills: [
                s.FRONTEND,
                s.JAVASCRIPT, s.CSS, s.HTML5, s.CORDOVA,
                s.VMWARE, s.VIRTUALBOX,
                s.FEDORA, s.MACOS,
            ]
        },
        { // Nexxia (Pràctiques) //
            nom: "Nexxia",
            dates: ["17-10-2016", "28-02-2017"],
            skills: [
                s.FRONTEND,
                s.JAVASCRIPT, s.JQUERY, s.CSS, s.HTML5, s.BOOTSTRAP,
                s.DELPHI, s.FASTREPORT,
                s.RESPONSIVEDESIGN,
                s.WINDOWS,
            ]
        },
        { // Beca Tecnocom //
            nom: "Beca Tecnocom",
            dates: ["03-07-2017", "31-07-2017"],
            skills: [
                s.BACKEND,
                s.JAVA, s.JSP, s.MAVEN, s.MICROSERVICES,
                s.NETBEANS, s.ECLIPSE, s.SVN,
                s.WINDOWSSERVER, s.REMOTEDESKTOP, s.TEAMVIEWER,
                s.PL1, s.DB2, s.ZOSMVS,
                s.WINDOWS,
            ]
        },
        { // Tecnocom //
            nom: "Tecnocom",
            dates: ["04-09-2017", "08-03-2019"],
            skills: [
                s.BACKEND,
                s.JAVA, s.JSP, s.MAVEN, s.MICROSERVICES,
                s.SQLDEVELOPER,
                s.NETBEANS, s.ECLIPSE, s.SVN,
                s.WINDOWSSERVER, s.REMOTEDESKTOP, s.TEAMVIEWER,
                s.AGILE, s.CONTINUOUSINTEGRATION,
                s.WINDOWS,
            ]
        },
        { // Matic //
            nom: "Matic",
            dates: ["07-09-2020", "25-06-2021"],
            skills: [
                s.FRONTEND, s.BACKEND,
                s.JAVASCRIPT, s.JQUERY, s.CSS, s.HTML5,
                s.BOOTSTRAP, s.MATERIALIZE,
                s.CORDOVA, s.ANDROID, s.UWP,
                s.NODEJS, s.SEQUELIZE, s.PHP,
                s.MYSQL, s.PHPMYADMIN, s.SQLDEVELOPER,
                s.APACHE, s.FILEZILLA,
                s.POWERSHELL,
                s.JOOMLA, s.K2, s.AKEEBABACKUP, s.JCEFILEMANAGER,
                s.WINDOWSSERVER, s.REMOTEDESKTOP, s.ANYDESK,
                s.AGILE, s.MVC, s.RESPONSIVEDESIGN,
                s.WINDOWS,
            ]
        },
        { // IN2ART // -
            nom: "IN2ART",
            dates: ["31-08-2021", "30-06-2023"],
            skills: [
                s.FRONTEND,
                s.ANGULAR, s.CSS, s.SCSS, s.TYPESCRIPT, s.JAVASCRIPT, s.JQUERY, s.HTML5,
                s.BOOTSTRAP, s.ANGULARMATERIAL,
                s.I18N,
                s.NODEJS,
                s.JSON,
                s.MYSQL, s.PHPMYADMIN,
                s.FILEZILLA, s.APACHE, s.GIT, s.SOURCETREE,
                s.POWERSHELL,
                s.POSTMAN, s.ASANA, s.POEDIT,
                s.MVC, s.AGILE, s.RESPONSIVEDESIGN,
                s.WINDOWS,
            ]
        },
        { // CodiTramuntana // -
            nom: "CodiTramuntana",
            dates: ["05-07-2023", "22-08-2023"],
            skills: [
                s.FRONTEND, s.BACKEND,
                s.RUBYONRAILS,
                s.SQLDEVELOPER,
                s.WINSCP, //?
                s.REDHAT,
            ]
        },
        { // Orange //
            nom: "Orange",
            dates: ["23-08-2023", "03-11-2023"],
            skills: [
                s.FRONTEND, s.BACKEND,
                s.JAVA, s.WEBLOGIC, s.ECLIPSE, s.MAVEN, s.MICROSERVICES,
                s.ANGULAR,
                s.SQLDEVELOPER,
                s.JIRA, s.CONFLUENCE, s.GITLAB, s.JFROGARTIFACTORY, s.FIGMA,
                s.TORTOISEGIT,
                s.WINSCP, s.WINDOWSSERVER,
                s.MVC, s.AGILE, s.CONTINUOUSINTEGRATION,
                s.WINDOWS,
            ]
        },
        { // Evora //
            nom: "Evora",
            dates: ["06-11-2023", "26-01-2024"],
            skills: [
                s.FRONTEND,
                s.ANGULAR, s.NGRX, s.RXJS, s.TYPESCRIPT, s.JAVASCRIPT, s.CSS, s.SCSS,
                s.ANGULARMATERIAL,
                s.PWA, s.CORDOVA,
                s.MICROSERVICES,
                s.GIT, s.BITBUCKET,
                s.JIRA, s.CONFLUENCE, s.FIGMA,
                s.MVC, s.AGILE, s.CONTINUOUSINTEGRATION,
                s.MACOS,
            ]
        },
        { // Indra //
            nom: "Indra",
            dates: ["18-06-2024", "20-02-2026"],
            skills: [
                s.FRONTEND,
                s.ANGULAR, s.NGRX, s.RXJS, s.TYPESCRIPT, s.JAVASCRIPT, s.CSS, s.SCSS, s.HTML5,
                s.PRIMENG, s.BOOTSTRAP, s.ANGULARMATERIAL,
                s.JEST, s.JASMINE, s.JIRA, s.SONARQUBE, s.OPENSHIFT,
                s.MICROSERVICES,
                s.GIT, s.SOURCETREE, s.BITBUCKET,
                s.FIGMA,
                s.MVC, s.AGILE, s.RESPONSIVEDESIGN, s.CONTINUOUSINTEGRATION,
                s.WINDOWS,
            ]
        },

    ];

    public skills: any;

    constructor() {

        // Invertir ordre dates //
        this.experiencia.forEach(empresa => empresa.dates = empresa.dates.map(data => data.split("-").reverse().join("-")));
        
        this.calcularExperiencia();

        this.setIntervalDiari();

    }

    setIntervalDiari() {
        const ara = new Date();
        const diaSeguent = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate() + 1, 0, 0, 0, 0);
        let tempsFinsMitjanit = diaSeguent.getTime() - ara.getTime();

        setTimeout(() => {
            this.calcularExperiencia();
            this.setIntervalDiari();
        }, tempsFinsMitjanit);
    }

    calcularExperiencia() {

        this.skills = { [Skill._TOTAL]: { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] } };

        // Omplim skills amb diesTotals //
        this.experiencia.forEach(empresa => {
            let dataInicial = new Date(empresa.dates[0]);
            let dataFinal = empresa.dates[1] ? new Date(empresa.dates[1]) : new Date();
            let diesTotals = (dataFinal.valueOf() - dataInicial.valueOf()) / (24 * 60 * 60 * 1000);

            if (empresa.nom == "Matic") diesTotals += 65.15 / 8; // 65.15 extra hours //
            if (empresa.nom == "Indra") diesTotals += 2 + 5.65 + 2; // Vacances no gaudides //
            if (empresa.nom == "Indra") diesTotals *= 43 / 40; // 43h a week //

            empresa.skills.forEach((skill: Skill) => {
                if (this.skills[skill] === undefined)
                    this.skills[skill] = { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };

                let diesASumar = diesTotals;
                
                if (empresa.nom == "Matic" && skill == Skill.SEQUELIZE) diesASumar *= 188 / 443; // I did ~42.5% of the work in System Block's backend //
                
                this.skills[skill].diesTotals += diesASumar;

                this.skills[skill].empreses.push(empresa.nom);
            });

            this.skills[Skill._TOTAL].diesTotals += diesTotals;
        });

        // Calculem els seus anys, mesos, dies, etc. //
        for (var skill in this.skills) {
            let diesTotals
                = this.skills[skill].diesTotals
                = Math.round(this.skills[skill].diesTotals);

            const anys = Math.floor(diesTotals / 365.24);
            diesTotals %= 365.24;
            const mesos = Math.floor(diesTotals / 30.44);
            diesTotals %= 30.44;
            const dies = Math.floor(diesTotals);

            let anysMesosDies = [anys, mesos, dies];

            this.skills[skill].anysMesosDies = anysMesosDies;
            this.skills[skill].empreses.reverse();
        }

    }
    getSkill(skill) {
        return this.skills![skill] || null
    }
    getTextExp(skill: string) {
        if (!this.skills[skill]) return "";
        return this.construirCadenaTempsExp(this.skills[skill].anysMesosDies);
    }
    construirCadenaTempsExp([anys, mesos, dies]: Array<number>) {
        // 5 años, 9 meses y 29 días // 5 años y 10 meses // 5 años y 1 día //
        const index = this.m.idiomaIndex;
        const textAnys = [["any", "anys"], ["año", "años"], ["year", "years"]][index];
        const textMesos = [["mes", "mesos"], ["mes", "meses"], ["month", "months"]][index];
        const textDies = [["dia", "dies"], ["día", "días"], ["day", "days"]][index];
        const conjuncio = this.m.conjuncio;

        let cadenes: Array<string> = [];
        if (anys > 0) cadenes.push(anys + " " + (anys == 1 ? textAnys[0] : textAnys[1]));
        if (mesos > 0) cadenes.push(mesos + " " + (mesos == 1 ? textMesos[0] : textMesos[1]));
        if (dies > 0) cadenes.push(dies + " " + (dies == 1 ? textDies[0] : textDies[1]));

        if (cadenes.length == 3) return `${cadenes[0]}, ${cadenes[1]} ${conjuncio} ${cadenes[2]}`;
        if (cadenes.length == 2) return `${cadenes[0]} ${conjuncio} ${cadenes[1]}`;
        if (cadenes.length == 1) return `${cadenes[0]}`;
        return "";
    }
    construirCadenaTempsExp_anysMesos([anys, mesos, dies]: Array<number>) {
        // 5 años y 10 meses // 6 años //
        if (dies && dies >= 15)
            mesos++;
        if (mesos >= 12) {
            mesos = 0; anys++;
        }
        return this.construirCadenaTempsExp([anys, mesos, 0]);
    }
    construirCadenaTempsExpCurta([anys, mesos, dies]: Array<number>) {
        // 5a 11m //
        if (dies && dies >= 15)
            mesos++;
        if (mesos >= 12) {
            mesos = 0; anys++;
        }

        const index = this.m.idiomaIndex;
        const textAnys = ["a", "a", "y"][index];

        let text: string = "";
        if (anys > 0) text += anys + textAnys + " ";
        if (mesos > 0) text += mesos + "m";

        return text;
    }


    normalitzar(s) {
        return s
            .normalize()
            .toLowerCase()
            .replaceAll("#", "sharp")
            .replaceAll("/", "")
            .replaceAll(" ", "")
    }

}
