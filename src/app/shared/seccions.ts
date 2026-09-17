import { CASE_STUDIES, CaseStudy } from 'src/app/data/case-studies.data';

export interface Seccio {
    nom: string;
    pagina: "experience" | "projects" | "art";
    caseStudy: CaseStudy;
}

export const SECCIONS: Seccio[] = [

    { nom: "indra",         pagina: "experience",   caseStudy: CASE_STUDIES.indra },
    { nom: "in2art",        pagina: "experience",   caseStudy: CASE_STUDIES.in2art_exp },
    { nom: "matic",         pagina: "experience",   caseStudy: CASE_STUDIES.matic },
    { nom: "evora",         pagina: "experience",   caseStudy: CASE_STUDIES.evora },
    { nom: "orange",        pagina: "experience",   caseStudy: CASE_STUDIES.orange },
    { nom: "tecnocom",      pagina: "experience",   caseStudy: CASE_STUDIES.tecnocom },
    { nom: "nexxia",        pagina: "experience",   caseStudy: CASE_STUDIES.nexxia },

    { nom: "in2art",        pagina: "projects",     caseStudy: CASE_STUDIES.in2art },
    { nom: "bunquer",       pagina: "projects",     caseStudy: CASE_STUDIES.bunquer },
    { nom: "android",       pagina: "projects",     caseStudy: CASE_STUDIES.android },
    { nom: "mad-jumpgate",  pagina: "projects",     caseStudy: CASE_STUDIES.mad_jumpgate },
    { nom: "github",        pagina: "projects",     caseStudy: CASE_STUDIES.github },
    { nom: "custom-roms",   pagina: "projects",     caseStudy: CASE_STUDIES.custom_roms },
    { nom: "tasker",        pagina: "projects",     caseStudy: CASE_STUDIES.tasker },

    { nom: "icons",         pagina: "art",          caseStudy: CASE_STUDIES.icons },
    { nom: "amazfit",       pagina: "art",          caseStudy: CASE_STUDIES.amazfit },
];
