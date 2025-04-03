import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

    constructor(
        public m: MainService,
        public ls: LayoutService,
    ) {
        m.index = this;
    }
    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    ngAfterViewInit() {
        this.ls.index = this.indexRef.nativeElement;
    }

    afterRootFadeIn() { }

    idExists(id) {
        return document.getElementById(id);
    }
    getTema(opcio) {
        if (!opcio.tema)
            opcio.tema = Array.from(document.getElementById(opcio.id)?.classList || []).find(c => c.startsWith("tema-"));
        return opcio.tema;
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        let offset = this.m.appbar.height();

        if (this.vistaMobil())
            offset += this.indexRef.nativeElement.offsetHeight;
        else
            offset += 10;


        if (element) {
            window.scrollTo({ top: element.offsetTop - offset });
        }
    }

    public getAmpladaMargeEsquerre() {
        // .content max-width: 940 //
        return ((window.innerWidth-17) - 940) / 2;
    }
    public vistaMobil() {
        return true;
        return window.innerWidth < 1300;
    }

    public scrollOnHover(event: MouseEvent) {
        if (this.m.esPantallaTactil()) return;

        let i = this.indexRef.nativeElement;
        let pos = event.clientX / i.clientWidth;

        pos = pos * 1.5 - 0.25;

        i.scrollLeft = pos * (i.scrollWidth - i.clientWidth);
    }

    public getOpcions() {
        return [
            { id: "bio",                nom: ["Sobre mi", "Sobre mí", "About me"][this.m.idiomaIndex] },
            { id: "projects-home",      nom: ["Projectes", "Proyectos", "Projects"][this.m.idiomaIndex] },
            { id: "experiencies-home",  nom: ["Experiència", "Experiencia", "Experience"][this.m.idiomaIndex] },
            { id: "languages",          nom: ["Habilitats", "Habilidades", "Skills"][this.m.idiomaIndex] },
            { id: "indra",              nom: "Indra"              },
            { id: "in2art",             nom: "IN2ART"             },
            { id: "matic",              nom: "Matic"              },
            { id: "evora",              nom: "Evora IT"           },
            { id: "orange",             nom: "Orange"             },
            { id: "tecnocom",           nom: "Tecnocom"           },
            { id: "nexxia",             nom: "Nexxia"             },
            { id: "android",            nom: "Apps Android"       },
            { id: "mad-jumpgate",       nom: ["Joc de disparar de PC", "Juego de disparos PC", "PC shooting game"][this.m.idiomaIndex] },
            { id: "github",             nom: ["Projectes GitHub", "Proyectos GitHub", "GitHub Projects"][this.m.idiomaIndex] },
            { id: "custom-roms",        nom: "Custom ROMs"        },
            { id: "tasker",             nom: "Tasker"             },
            { id: "icons",              nom: ["Icones", "Iconos", "Icons"][this.m.idiomaIndex] },
            { id: "amazfit",            nom: "Amazfit Watchfaces" },
        ];
    }

}
