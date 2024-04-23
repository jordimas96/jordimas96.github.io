import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {

    @ViewChild('index') index: ElementRef;

    constructor(public m: MainService) {
        m.index = this;
    }
    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() { }

    idExists(id) {
        return document.getElementById(id);
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        let offset = this.m.appbar.height();

        if (this.vistaMobil())
            offset += this.index.nativeElement.offsetHeight;
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
        // return false;
        return window.innerWidth < 1300;
    }

    public scrollOnHover(event: MouseEvent) {
        if (this.m.esPantallaTactil()) return;
        
        let i = this.index.nativeElement;
        let pos = event.clientX / i.clientWidth;

        pos = pos * 1.5 - 0.25;

        i.scrollLeft = pos * (i.scrollWidth - i.clientWidth);
    }

    public getOpcions() {
        return [
            { id: "bio",          nom: ["Sobre mi", "Sobre mí", "About me"][this.m.idiomaIndex] },
            { id: "skills",       nom: ["Habilitats", "Habilidades", "Skills"][this.m.idiomaIndex] },
            { id: "evora",        nom: "Evora IT"           },
            { id: "orange",       nom: "Orange"             },
            { id: "in2art",       nom: "In2art"             },
            { id: "matic",        nom: "Matic"              },
            { id: "indra",        nom: "Indra"              },
            { id: "nexxia",       nom: "Nexxia"             },
            { id: "android",      nom: "Apps Android"       },
            { id: "mad-jumpgate", nom: "Mad Jumpgate"       },
            { id: "github",       nom: ["Projectes GitHub", "Proyectos GitHub", "GitHub Projects"][this.m.idiomaIndex] },
            { id: "custom-roms",  nom: "Custom ROMs"        },
            { id: "tasker",       nom: "Tasker"             },
            { id: "icons",        nom: ["Icones", "Iconos", "Icons"][this.m.idiomaIndex] },
            { id: "amazfit",      nom: "Amazfit Watchfaces" },
        ];
    }

}
