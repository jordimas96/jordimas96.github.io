import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
export class BotonsNavegacioPaginaComponent implements OnInit, AfterViewInit {

    public botons: any[] = [];

    public carregat = false;
    public scrollAlFinalDePagina = false;

    constructor(
        public m: MainService,
        private el: ElementRef,
    ) {
        if (this.fabMode)
            el.nativeElement.style.visibility = "hidden";
    }

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

    ngAfterViewInit() {
        setTimeout(() => {
            this.el.nativeElement.style.visibility = "";
            this.carregat = true;
        }, 300);
    }

    @HostListener('window:scroll')
    @HostListener('window:resize')
    _() {
        let liniaBottom = window.scrollY + window.innerHeight;
        this.scrollAlFinalDePagina = liniaBottom > this.el.nativeElement.offsetTop - 128;
    }

    get fabMode() { return this.m.esPantallaMobil; }
    
};
