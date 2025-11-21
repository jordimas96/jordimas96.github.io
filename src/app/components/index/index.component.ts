import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class IndexComponent implements OnInit, AfterViewInit {

    @ViewChild('index') indexRef: ElementRef;

    public readonly index = [
        { id: "bio",                nom: ["Introducció", "Introducción", "Introduction"][this.m.idiomaIndex] },
        { id: "projects-home",      nom: ["Projectes", "Proyectos", "Projects"][this.m.idiomaIndex] },
        { id: "experience-home",    nom: ["Experiència", "Experiencia", "Experience"][this.m.idiomaIndex] },
        { id: "stats",              nom: ["Estadístiques", "Estadísticas", "Stats"][this.m.idiomaIndex] },
        { id: "languages",          nom: ["Habilitats", "Habilidades", "Skills"][this.m.idiomaIndex] },
        { id: "indra",              nom: "Indra"              },
        { id: "in2art",             nom: "IN2ART"             },
        { id: "matic",              nom: "Matic"              },
        { id: "evora",              nom: "Evora IT"           },
        { id: "orange",             nom: "Orange"             },
        { id: "tecnocom",           nom: "Tecnocom"           },
        { id: "nexxia",             nom: "Nexxia"             },
        { id: "android",            nom: ["Apps Android", "Apps Android", "Android Apps"][this.m.idiomaIndex] },
        { id: "mad-jumpgate",       nom: ["Joc de disparar de PC", "Juego de disparos PC", "PC shooting game"][this.m.idiomaIndex] },
        { id: "github",             nom: ["Projectes GitHub", "Proyectos GitHub", "GitHub Projects"][this.m.idiomaIndex] },
        { id: "custom-roms",        nom: "Custom ROMs"        },
        { id: "tasker",             nom: "Tasker"             },
        { id: "icons",              nom: ["Icones", "Iconos", "Icons"][this.m.idiomaIndex] },
        { id: "amazfit",            nom: "Amazfit Watchfaces" },
    ];
    public elementsALaPagina: any = [];

    constructor(
        public m: MainService,
        public ls: LayoutService,
        public router: Router,
        public route: ActivatedRoute,
    ) {
        m.index = this;

        // Event al canviar de pàgina //
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => setTimeout(() => this.onPageChange(), 0));
        
        this.route.queryParams.subscribe(() => setTimeout(() => this.onPageChange(), 0));


    }
    async ngOnInit() {

    }

    ngAfterViewInit() {
        this.ls.index = this.indexRef.nativeElement;
    }

    onPageChange() {
        this.indexRef.nativeElement.scrollLeft = 0;
        this.elementsALaPagina = this.index.filter(e => document.getElementById(e.id));
        this.reordenarElements(); // Segons DOM //
        
        

    }

    height() {
        return this.indexRef.nativeElement.offsetHeight || 0;
    }
    getTema(opcio) {
        if (!opcio.tema)
            opcio.tema = Array.from(document.getElementById(opcio.id)?.classList || []).find(c => c.startsWith("tema-"));
        return opcio.tema;
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        let offset = this.m.appbar.height() + this.indexRef.nativeElement.offsetHeight;


        if (element) {
            window.scrollTo({ top: element.offsetTop - offset });
        }
    }

    public scrollOnHover(event: MouseEvent) {
        if (this.m.esPantallaTactil) return;

        let i = this.indexRef.nativeElement;
        let pos = event.clientX / i.clientWidth;

        pos = pos * 1.5 - 0.25;

        i.scrollLeft = pos * (i.scrollWidth - i.clientWidth);
    }

    private reordenarElements() {
        this.elementsALaPagina.sort((a, b) => {
            const elA = document.getElementById(a.id);
            const elB = document.getElementById(b.id);
            if (elA && elB) {
                return elA.compareDocumentPosition(elB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            }
            return 0;
        });
    }



    // Funcions //
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.m.scroll = window.scrollY;
        if (this.m.scroll > 0)
            this.indexRef.nativeElement.classList.add("scrolled");
        else
            this.indexRef.nativeElement.classList.remove("scrolled");
    }

}
