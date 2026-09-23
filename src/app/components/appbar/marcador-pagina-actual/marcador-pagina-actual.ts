import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skill } from 'src/app/data/skills.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

export interface Marcador {
    text?: string,
    skill?: Skill,
}

@Component({
    selector: 'jmp-marcador-pagina-actual',
    templateUrl: './marcador-pagina-actual.html',
    styleUrl: './marcador-pagina-actual.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class MarcadorPaginaActual implements OnInit, AfterViewInit {
    
    public m = inject(MainService);
    private router = inject(Router);

    @ViewChild("contingut") contingut: ElementRef<HTMLDivElement>;
    @ViewChild("contingutIntern") contingutIntern: ElementRef<HTMLDivElement>;

    public scroll = false;
    public esCaseStudy = false;

    marcador: Marcador | null;

    textosCaseStudies = {
        "/experience/indra":         "Indra",
        "/experience/evora":         "Evora IT",
        "/experience/orange":        "Orange",
        "/experience/in2art":        "IN2ART",
        "/experience/matic":         "Matic",
        "/experience/tecnocom":      "Tecnocom / Indra",
        "/experience/nexxia":        "Nexxia",
        "/projects/in2art":          "IN2ART",
        "/projects/bunquer":         "El búnquer descarregador",
        "/projects/android":         "Apps Android",
        "/projects/mad-jumpgate":    "PC shooting game",
        "/projects/github":          "GitHub Projects",
        "/projects/custom-roms":     "Custom ROMs",
        "/projects/tasker":          "Tasker",
        "/art/icons":                "Icons",
        "/art/amazfit":              "Amazfit Watchfaces",
    };

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(({ url }) => {

                this.esCaseStudy = url.startsWith("/experience/") || url.startsWith("/projects/") || url.startsWith("/art/");
                
                this.actualitzarMarcador(url);

                // Google Analytics //
                // TODO
                
            });
    }

    ngAfterViewInit() {
        this.onScroll();
    }

    actualitzarMarcador(url: string) {
        let marcador: any = this.getDadesMarcador(url);

        let elem = this.contingutIntern?.nativeElement;

        // Actualitzar marcador amb animacio //
        elem.classList.remove("fadein");
        elem.classList.add("fadeout");
        elem.addEventListener("animationend", () => {
            elem.classList.remove("fadeout");

            // Al acabar l'animacio, canvies les dades i despres la tornes a activar //
            this.marcador = marcador;

            elem.classList.add("fadein");
        }, { once: true });
    }

    getDadesMarcador(url: string): Marcador {
        if (url == "/" || url == "/home")   return { text: "Jordi Mas Parramon" };
        else if (url == "/experience")      return { text: ["Experiència professional", "Experiencia profesional", "Professional experience"][this.m.idiomaIndex] };
        else if (url == "/projects")        return { text: ["Projectes", "Proyectos", "Projects"][this.m.idiomaIndex] };
        else if (url == "/art")             return { text: ["Projectes artístics", "Proyectos artísticos", "Artistic projects"][this.m.idiomaIndex] };
        else if (url == "/about-me")        return { text: ["Sobre mi", "Acerca de mí", "About me"][this.m.idiomaIndex] };

        else if (url.startsWith("/search")) return {};

        else if (url.startsWith("/skill/")) {
            let skillUrl = url.substring(7);

            // Si no existeix la skill //
            if (!Object.values(Skill).filter(s => s != Skill._TOTAL).some(v => v == skillUrl)) return {};

            return { skill: skillUrl as Skill };
        }
        else if (url.startsWith("/experience") || url.startsWith("/projects") || url.startsWith("/art")) {
            return { text: this.textosCaseStudies[url] };
        }




        return {};
    }


    @HostListener('window:scroll')
    onScroll() {
        this.scroll = window.scrollY > 130;
    }

}
