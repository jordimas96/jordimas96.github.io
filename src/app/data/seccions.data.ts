import { CaseStudyId } from 'src/app/data/case-studies.data';

export interface Seccio {
    id: CaseStudyId,
    pagina: CaseStudyPagina;
    nomUrl: string;
}

export type CaseStudyPagina = "experience" | "projects" | "art";

export const SECCIONS: Seccio[] = [

    { id: "indra",          pagina: "experience",   nomUrl: "indra" },
    { id: "in2art_exp",     pagina: "experience",   nomUrl: "in2art" },
    { id: "matic",          pagina: "experience",   nomUrl: "matic" },
    { id: "evora",          pagina: "experience",   nomUrl: "evora" },
    { id: "orange",         pagina: "experience",   nomUrl: "orange" },
    { id: "tecnocom",       pagina: "experience",   nomUrl: "tecnocom" },
    { id: "nexxia",         pagina: "experience",   nomUrl: "nexxia" },

    { id: "in2art",         pagina: "projects",     nomUrl: "in2art" },
    { id: "bunquer",        pagina: "projects",     nomUrl: "bunquer" },
    { id: "android",        pagina: "projects",     nomUrl: "android" },
    { id: "mad_jumpgate",   pagina: "projects",     nomUrl: "mad-jumpgate" },
    { id: "github",         pagina: "projects",     nomUrl: "github" },
    { id: "custom_roms",    pagina: "projects",     nomUrl: "custom-roms" },
    { id: "tasker",         pagina: "projects",     nomUrl: "tasker" },

    { id: "icons",          pagina: "art",          nomUrl: "icons" },
    { id: "amazfit",        pagina: "art",          nomUrl: "amazfit" },
];
