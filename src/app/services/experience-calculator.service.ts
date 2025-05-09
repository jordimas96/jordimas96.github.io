import { Injectable } from "@angular/core";
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from "./main.service";

@Injectable({
    providedIn: 'root'
})
export class ExperienceCalculatorService {

    private experiencia = [
        { // DSET (Pràctiques) //
            nom: "DSET",
            dates: ["2016-02-01", "2016-07-14"],
            skills: [
                Skills.FRONTEND,
                Skills.JAVASCRIPT, Skills.CSS, Skills.HTML5, Skills.CORDOVA,
                Skills.VMWARE, Skills.VIRTUALBOX,
                Skills.FEDORA, Skills.MACOS,
            ]
        },
        { // Nexxia (Pràctiques) //
            nom: "Nexxia",
            dates: ["2016-10-17", "2017-02-28"],
            skills: [
                Skills.FRONTEND,
                Skills.JAVASCRIPT, Skills.JQUERY, Skills.CSS, Skills.HTML5, Skills.BOOTSTRAP,
                Skills.DELPHI, Skills.FASTREPORT,
                Skills.RESPONSIVEDESIGN,
                Skills.WINDOWS,
            ]
        },
        { // Beca Tecnocom //
            nom: "Beca Tecnocom",
            dates: ["2017-07-03", "2017-07-31"],
            skills: [
                Skills.BACKEND,
                Skills.JAVA, Skills.JSP, Skills.MAVEN, Skills.MICROSERVICES,
                Skills.NETBEANS, Skills.ECLIPSE, Skills.SVN,
                Skills.WINDOWSSERVER, Skills.REMOTEDESKTOP, Skills.TEAMVIEWER,
                Skills.PL1, Skills.DB2, Skills.ZOSMVS,
                Skills.WINDOWS,
            ]
        },
        { // Tecnocom //
            nom: "Tecnocom",
            dates: ["2017-09-04", "2019-03-08"],
            skills: [
                Skills.BACKEND,
                Skills.JAVA, Skills.JSP, Skills.MAVEN, Skills.MICROSERVICES,
                Skills.SQLDEVELOPER,
                Skills.NETBEANS, Skills.ECLIPSE, Skills.SVN,
                Skills.WINDOWSSERVER, Skills.REMOTEDESKTOP, Skills.TEAMVIEWER,
                Skills.AGILE, Skills.CONTINUOUSINTEGRATION,
                Skills.WINDOWS,
            ]
        },
        { // Matic //
            nom: "Matic",
            dates: ["2020-09-07", "2021-06-25"],
            skills: [
                Skills.FRONTEND, Skills.BACKEND,
                Skills.JAVASCRIPT, Skills.JQUERY, Skills.CSS, Skills.HTML5,
                Skills.BOOTSTRAP, Skills.MATERIALIZE,
                Skills.CORDOVA, Skills.UWP,
                Skills.NODEJS, Skills.SEQUELIZE, Skills.PHP,
                Skills.MYSQL, Skills.PHPMYADMIN, Skills.SQLDEVELOPER,
                Skills.APACHE, Skills.FILEZILLA,
                Skills.POWERSHELL,
                Skills.JOOMLA, Skills.K2, Skills.AKEEBABACKUP, Skills.JCEFILEMANAGER,
                Skills.WINDOWSSERVER, Skills.REMOTEDESKTOP, Skills.ANYDESK,
                Skills.AGILE, Skills.MVC, Skills.RESPONSIVEDESIGN,
                Skills.WINDOWS,
            ]
        },
        { // In2art // -
            nom: "In2art",
            dates: ["2021-08-31", "2023-06-30"],
            skills: [
                Skills.FRONTEND,
                Skills.ANGULAR, Skills.CSS, Skills.SASS, Skills.TYPESCRIPT, Skills.JAVASCRIPT, Skills.JQUERY, Skills.HTML5,
                Skills.BOOTSTRAP, Skills.ANGULARMATERIAL,
                Skills.I18N,
                Skills.NODEJS,
                Skills.JSON,
                Skills.MYSQL, Skills.PHPMYADMIN,
                Skills.FILEZILLA, Skills.APACHE, Skills.GIT, Skills.SOURCETREE,
                Skills.POWERSHELL,
                Skills.POSTMAN, Skills.ASANA, Skills.POEDIT,
                Skills.MVC, Skills.AGILE, Skills.RESPONSIVEDESIGN,
                Skills.WINDOWS,
            ]
        },
        { // CodiTramuntana // -
            nom: "CodiTramuntana",
            dates: ["2023-07-05", "2023-08-22"],
            skills: [
                Skills.FRONTEND, Skills.BACKEND,
                Skills.RUBYONRAILS,
                Skills.SQLDEVELOPER,
                Skills.WINSCP, //?
                Skills.REDHAT,
            ]
        },
        { // Orange //
            nom: "Orange",
            dates: ["2023-08-23", "2023-11-03"],
            skills: [
                Skills.FRONTEND, Skills.BACKEND,
                Skills.JAVA, Skills.WEBLOGIC, Skills.ECLIPSE, Skills.MAVEN, Skills.MICROSERVICES,
                Skills.ANGULAR,
                Skills.SQLDEVELOPER,
                Skills.JIRA, Skills.CONFLUENCE, Skills.GITLAB, Skills.JFROGARTIFACTORY, Skills.FIGMA,
                Skills.TORTOISEGIT,
                Skills.WINSCP, Skills.WINDOWSSERVER,
                Skills.MVC, Skills.AGILE, Skills.CONTINUOUSINTEGRATION,
                Skills.WINDOWS,
            ]
        },
        { // Evora //
            nom: "Evora",
            dates: ["2023-11-06", "2024-01-26"],
            skills: [
                Skills.FRONTEND,
                Skills.ANGULAR, Skills.NGRX, Skills.TYPESCRIPT, Skills.JAVASCRIPT, Skills.CSS, Skills.SASS,
                Skills.ANGULARMATERIAL,
                Skills.PWA, Skills.CORDOVA,
                Skills.MICROSERVICES,
                Skills.GIT, Skills.BITBUCKET,
                Skills.JIRA, Skills.CONFLUENCE, Skills.FIGMA,
                Skills.MVC, Skills.AGILE, Skills.CONTINUOUSINTEGRATION,
                Skills.MACOS,
            ]
        },
        { // Indra //
            nom: "Indra",
            dates: ["2024-06-18",],
            skills: [
                Skills.FRONTEND,
                Skills.ANGULAR, Skills.NGRX, Skills.TYPESCRIPT, Skills.JAVASCRIPT, Skills.CSS, Skills.SASS, Skills.HTML5,
                Skills.PRIMENG, Skills.BOOTSTRAP, Skills.ANGULARMATERIAL,
                Skills.JASMINE, Skills.JIRA, Skills.SONARQUBE, Skills.OPENSHIFT,
                Skills.MICROSERVICES,
                Skills.GIT, Skills.SOURCETREE, Skills.BITBUCKET,
                Skills.FIGMA,
                Skills.MVC, Skills.AGILE, Skills.RESPONSIVEDESIGN, Skills.CONTINUOUSINTEGRATION,
                Skills.WINDOWS,
            ]
        },

    ];

    public skills: any;

    constructor(public m: MainService) {
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

        this.skills = { [Skills._TOTAL]: { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] } };

        // Omplim skills amb diesTotals //
        this.experiencia.forEach(empresa => {
            let dataInicial = new Date(empresa.dates[0]);
            let dataFinal = empresa.dates[1] ? new Date(empresa.dates[1]) : new Date();
            let diesTotals = (dataFinal.valueOf() - dataInicial.valueOf()) / (24 * 60 * 60 * 1000);

            if (empresa.nom == "Matic") diesTotals += 65.15 / 8; // 65.15 extra hours //
            if (empresa.nom == "Indra") diesTotals *= 43 / 40; // 43h a week //

            empresa.skills.forEach((skill: Skills) => {
                if (this.skills[skill] === undefined)
                    this.skills[skill] = { diesTotals: 0, empreses: [], anysMesosDies: [0, 0, 0] };
                this.skills[skill].diesTotals += diesTotals;

                this.skills[skill].empreses.push(empresa.nom);
            });

            this.skills[Skills._TOTAL].diesTotals += diesTotals;
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
