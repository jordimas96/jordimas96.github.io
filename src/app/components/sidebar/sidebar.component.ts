import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeComponent } from 'src/app/components/dark-mode/dark-mode.component';
import { SelectorIdiomaComponent } from 'src/app/components/selector-idioma/selector-idioma.component';
import { BlockGoogleAnalyticsService } from 'src/app/services/blockGoogleAnalytics.service';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [
        RouterLinkActive,
        RouterLink,
        ...SharedImports,
        DarkModeComponent,
        SelectorIdiomaComponent,
    ]
})
export class SidebarComponent implements OnInit, AfterViewInit {

    // Mobil: Sempre oberta, sempre drawer. S'obre i es tanca amb les 3 ralles. només cal controlar posició //
    // PC: Mode rail o mode drawer. Canvia de mode quan cliques el botó //

    @ViewChild("sidebar") sidebarRef: ElementRef;

    public readonly DRAWER_WIDTH = 281;
    public readonly RAIL_WIDTH = 64;

    public mobil: boolean | null = null;
    public open = false;
    public rail: boolean;


    constructor(
        public m: MainService,
        public blockGoogleAnalyticsService: BlockGoogleAnalyticsService,
        public ls: LayoutService,
        public cdr: ChangeDetectorRef
    ) {
        m.sidebar = this;
    }
    ngOnInit() {

        this.llegirVistaCookie();

        this.onResize();

        this.m.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                Utils.scroll(0);
                if (this.mobil)
                    this.open = false;
            }
        });
    }

    ngAfterViewInit() {
        this.ls.sidebar = this.sidebarRef.nativeElement;
    }

    llegirVistaCookie() {
        let vista = Utils.getCookie("vista");
        // Si no hi ha cookie //
        if (!vista) this.rail = true;
        else this.rail = vista == "rail";
    }
    escriureVistaCookie(rail) {
        Utils.setCookieDays("vista", rail ? "rail" : "drawer");
    }

    toggle() {
        if (this.vistaMobil())
            this.open = !this.open;
        else
            this.canviarVista();
    }

    canviarVista() {

        // En PC, mode rail/drawer //
        this.rail = !this.rail;


        this.escriureVistaCookie(this.rail);

        // this.ls.paddingLeftPagina = this.sidebarRef.nativeElement.offsetWidth;
        this.actPaddingLeftPagina();


        this.cdr.detectChanges();
    }

    actPaddingLeftPagina() {
        if (this.mobil)
            this.ls.paddingLeftPagina = 0;
        else
            this.ls.paddingLeftPagina = this.rail ? this.RAIL_WIDTH : this.DRAWER_WIDTH;
    }

    obrir() {
        // Get the middle point of scroll, for the transform-origin of the .page element //
        const scroll = (document.documentElement.scrollTop + document.documentElement.clientHeight / 2) / document.documentElement.scrollHeight * 100;

        this.open = true;
        $("#page, .index-mobil, .index-pc").css({ "transform-origin": `100% ${scroll}%`, "transform": "scale(0.95)" });
    }
    tancar() {
        this.open = false;
        $("#page, .index-mobil, .index-pc").css({ "transform": "" });
    }

    vistaMobil() {
        return window.innerWidth < 992;
    }


    getText = {
        inici:       () => ["Inici", "Inicio", "Home"][this.m.idiomaIndex],
        experiencia: () => ["Experiència", "Experiencia", "Experience"][this.m.idiomaIndex],
        projectes:   () => ["Projectes", "Proyectos", "Projects"][this.m.idiomaIndex],
        art:         () => ["Art", "Arte", "Art"][this.m.idiomaIndex],
        aboutme:     () => ["Sobre mi", "Acerca de mí", "About me"][this.m.idiomaIndex],
        cv:          () => ["Currículum", "Currículum", "Resume"][this.m.idiomaIndex],
    }


    getRutaCV() {
        return `assets/documents/CV/CV Jordi Mas Parramon ${this.m.idioma.toUpperCase()}.pdf`;
    }

    @HostListener('window:resize')
    onResize() {
        let valorMobilAbans = this.mobil;

        this.mobil = this.vistaMobil();

        // Si ha canviat //
        if (this.mobil != valorMobilAbans) {
            if (this.mobil) {
                this.open = false;
                this.rail = false;
            } else {
                this.open = true;
                this.llegirVistaCookie();
            }

            this.actPaddingLeftPagina();
        }
        this.cdr.detectChanges();
    }

}
