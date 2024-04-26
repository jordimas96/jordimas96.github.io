import { Injectable } from "@angular/core";
import { MainService } from "./main.service";

@Injectable({
    providedIn: 'root'
})
export class ExperienceCalculatorService {

    // private experiencia = [
    //     ["2016-2-1", "2016-7-14"], // DSET (Pràctiques) //
    //     ["2016-10-17", "2017-2-28"], // Nexxia (Pràctiques) //
    //     ["2017-7-3", "2017-7-31"], // Beca Indra //
    //     ["2017-9-4", "2019-3-8"], // Indra //
    //     ["2020-9-7", "2021-6-25"], // Matic //
    //     ["2021-8-31", "2023-6-30"], // In2art // -
    //     ["2023-7-1", "2023-8-22"], // CodiTramuntana // -
    //     ["2023-8-23", "2023-11-3"], // Orange //
    //     ["2023-11-6", ], // Evora // -
    // ];

    private experienciaJSON = [
        { // DSET (Pràctiques) //
            nom: "DSET (Pràctiques)",
            dates: ["2016-02-01", "2016-07-14"],
            skills: [
                "Frontend",
                "JavaScript", "CSS", "HTML5", "Cordova",
                "Fedora", "macOS",
                "VMware", "VirtualBox",
            ]
        },
        { // Nexxia (Pràctiques) //
            nom: "Nexxia (Pràctiques)",
            dates: ["2016-10-17", "2017-02-28"],
            skills: [
                "Frontend",
                "JavaScript", "JQuery", "CSS", "HTML5", "Bootstrap",
                "Delphi", "FastReport",
                "Responsive Design",
            ]
        },
        { // Beca Indra //
            nom: "Beca Indra",
            dates: ["2017-07-03", "2017-07-31"],
            skills: [
                "Backend",
                "Java", "JSP", "Maven",
                "Netbeans", "Eclipse", "SVN",
                "Windows Server", "Remote Desktop", "TeamViewer",
                "PL/1", "DB2", "zOS/MVS",
            ]
        },
        { // Indra //
            nom: "Indra",
            dates: ["2017-09-04", "2019-03-08"],
            skills: [
                "Backend",
                "Java", "JSP", "Maven",
                "SQL Developer",
                "Netbeans", "Eclipse", "SVN",
                "Windows Server", "Remote Desktop", "TeamViewer",
                "Agile", "Continuous integration",
            ]
        },
        { // Matic //
            nom: "Matic",
            dates: ["2020-09-07", "2021-06-25"],
            skills: [
                "Frontend", "Backend",
                "JavaScript", "JQuery", "CSS", "HTML5", "Bootstrap", "Materialize",
                "Cordova", "UWP",
                "NodeJs", "Sequelize", "PHP",
                "MySQL", "PHPMyadmin", "SQL Developer",
                "Apache", "Filezilla",
                "PowerShell",
                "Joomla", "K2", "Akeeba Backup", "JCE FileManager",
                "Windows Server", "Remote Desktop", "AnyDesk",
                "Agile", "MVC", "Responsive Design",
            ]
        },
        { // In2art // -
            nom: "In2art",
            dates: ["2021-08-31", "2023-06-30"],
            skills: [
                "Frontend",
                "Angular", "CSS", "SASS", "TypeScript", "JavaScript", "JQuery", "HTML5", "Bootstrap", "Materialize",
                "NodeJs",
                "JSON",
                "MySQL", "PHPMyadmin",
                "Filezilla", "Apache", "Git", "Sourcetree",
                "PowerShell",
                "Postman", "Asana", "Poedit",
                "MVC", "Agile", "Responsive Design",
            ]
        },
        { // CodiTramuntana // -
            nom: "CodiTramuntana",
            dates: ["2023-07-01", "2023-08-22"],
            skills: [
                "Frontend", "Backend",
                "Ruby on Rails",
                "Red Hat",
                "SQL Developer",
                "WinSCP", //?
            ]
        },
        { // Orange //
            nom: "Orange",
            dates: ["2023-08-23", "2023-11-03"],
            skills: [
                "Frontend", "Backend",
                "Java", "WebLogic", "Eclipse", "Maven",
                "Angular",
                "SQL Developer",
                "Jira", "Confluence", "GitLab", "JFrog Artifactory",
                "TortoiseGit",
                "WinSCP", "Windows Server",
                "MVC", "Agile", "Continuous integration",
            ]
        },
        { // Evora // -
            nom: "Evora",
            dates: ["2023-11-06",],
            skills: [
                "Frontend",
                "Angular", "NgRx", "TypeScript", "JavaScript", "CSS", "SASS", "Materialize",
                "PWA", "Cordova",
                "Git",
                "Jira", "Confluence",
                "MVC", "Agile", "Continuous integration",
            ]
        },

    ];

    public experienciaPerSkills: any = { "_total": { diesTotals: 0 } };

    constructor(public m: MainService) {
        m.exp = this;
        
        this.calcularExperiencia();
    }


    // calcularAnysExperiencia() {
    //     let diesTotals = 0;
    //     this.experiencia.forEach(e => {
    //         let dataInicial = new Date(e.dates[0]);
    //         let dataFinal = e.dates[1] ? new Date(e.dates[1]) : new Date();
    //         diesTotals += (dataFinal.valueOf() - dataInicial.valueOf()) / (24 * 60 * 60 * 1000);
    //     });
        
    //     diesTotals = Math.round(diesTotals);

    //     const anys = Math.floor(diesTotals / 365.24);
    //     diesTotals %= 365.24;
    //     const mesos = Math.floor(diesTotals / 30.44);
    //     diesTotals %= 30.44;
    //     const dies = Math.floor(diesTotals);

    //     this.anysMesosDiesExp = [anys, mesos, dies];
    //     this.anysExp = anys;
    //     if (mesos >= 6)
    //         this.anysExp++;
    // }
    calcularExperiencia() {

        // Omplim experienciaPerSkills amb diesTotals //
        this.experienciaJSON.forEach(empresa => {
            let dataInicial = new Date(empresa.dates[0]);
            let dataFinal = empresa.dates[1] ? new Date(empresa.dates[1]) : new Date();
            let diesTotals = (dataFinal.valueOf() - dataInicial.valueOf()) / (24 * 60 * 60 * 1000);

            empresa.skills.forEach(skill => {
                if (this.experienciaPerSkills[skill] === undefined)
                    this.experienciaPerSkills[skill] = { diesTotals: 0 };
                this.experienciaPerSkills[skill].diesTotals += diesTotals;
            });
            
            this.experienciaPerSkills["_total"].diesTotals += diesTotals;
        });

        // Calculem els seus anys, mesos, dies, etc. //
        for (var skill in this.experienciaPerSkills) {
            let diesTotals
                = this.experienciaPerSkills[skill].diesTotals
                = Math.round(this.experienciaPerSkills[skill].diesTotals);

            const anys = Math.floor(diesTotals / 365.24);
            diesTotals %= 365.24;
            const mesos = Math.floor(diesTotals / 30.44);
            diesTotals %= 30.44;
            const dies = Math.floor(diesTotals);

            let anysMesosDies = [anys, mesos, dies];
            let anysAprox = anys;
            if (mesos >= 6)
                anysAprox++;

            this.experienciaPerSkills[skill].anysMesosDies = anysMesosDies;
            this.experienciaPerSkills[skill].anysAprox = anysAprox;
        }

    }
    getSkill(skill) {
        return this.experienciaPerSkills[skill] || {};
    }
    getTextExp(skill: string) {
        if (!this.experienciaPerSkills[skill]) return "";
        return this.construirCadenaTempsExp(this.experienciaPerSkills[skill].anysMesosDies);
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

        const index = this.m.idiomaIndex;
        const textAnys = [["any", "anys"], ["año", "años"], ["year", "years"]][index];
        const textMesos = [["mes", "mesos"], ["mes", "meses"], ["month", "months"]][index];
        const conjuncio = this.m.conjuncio;

        let cadenes: Array<string> = [];
        if (anys > 0) cadenes.push(anys + " " + (anys == 1 ? textAnys[0] : textAnys[1]));
        if (mesos > 0) cadenes.push(mesos + " " + (mesos == 1 ? textMesos[0] : textMesos[1]));
        
        if (cadenes.length == 2) return `${cadenes[0]} ${conjuncio} ${cadenes[1]}`;
        if (cadenes.length == 1) return `${cadenes[0]}`;
        return "";
    }
    construirCadenaTempsExpCurta([anys, mesos, dies]: Array<number>) {
        if (dies && dies >= 15)
            mesos++;

        const index = this.m.idiomaIndex;
        const textAnys = ["a", "a", "y"][index];

        let text: string = "";
        if (anys > 0) text += anys + textAnys+" ";
        if (mesos > 0) text += mesos + "m";

        return text;
    }

}
