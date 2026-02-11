import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

enum Pagines {
    home = "home",
    experience = "experience",
    projects = "projects",
    art = "art",
    about = "about-me"
}

@Component({
    selector: 'app-botons-navegacio-pagina',
    templateUrl: './botons-navegacio-pagina.component.html',
    styleUrl: './botons-navegacio-pagina.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
    ]
})
export class BotonsNavegacioPaginaComponent implements OnInit {

    public botons: any[] = [];

    constructor(public m: MainService) { }

    public readonly llistaBotons = {
        [Pagines.home]:       { nom: Pagines.home,       text: () => ["Inici", "Inicio", "Home"][this.m.idiomaIndex],                  iconClass: "fa-house" },
        [Pagines.experience]: { nom: Pagines.experience, text: () => ["Experiència", "Experiencia", "Experience"][this.m.idiomaIndex], iconClass: "fa-briefcase" },
        [Pagines.projects]:   { nom: Pagines.projects,   text: () => ["Projectes", "Proyectos", "Projects"][this.m.idiomaIndex],       iconClass: "fa-shapes" },
        [Pagines.art]:        { nom: Pagines.art,        text: () => ["Art", "Arte", "Art"][this.m.idiomaIndex],                       iconClass: "fa-paintbrush" },
        [Pagines.about]:      { nom: Pagines.about,      text: () => ["Sobre mi", "Acerca de mí", "About me"][this.m.idiomaIndex],     iconClass: "fa-user" },
    };

    ngOnInit() {
        switch (location.pathname.split("/")[1] || Pagines.home) {
            case (Pagines.home):        this.botons = [this.llistaBotons[Pagines.about],        this.llistaBotons[Pagines.experience]]; break;
            case (Pagines.experience):  this.botons = [this.llistaBotons[Pagines.home],         this.llistaBotons[Pagines.projects]];   break;
            case (Pagines.projects):    this.botons = [this.llistaBotons[Pagines.experience],   this.llistaBotons[Pagines.art]];        break;
            case (Pagines.art):         this.botons = [this.llistaBotons[Pagines.projects],     this.llistaBotons[Pagines.about]];      break;
            case (Pagines.about):       this.botons = [this.llistaBotons[Pagines.art],          this.llistaBotons[Pagines.home]];       break;
        }
    }
    
};
