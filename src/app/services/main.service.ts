import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { AppbarComponent } from "../components/appbar/appbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { IndexComponent } from "../components/index/index.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { Utils } from "../shared/utils";
import { ExperienceCalculatorService } from "./experience-calculator.service";
import { ThemeService } from "./theme.service";

// https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/ //

@Injectable({
    providedIn: 'root'
})
export class MainService {
    // Components //
    public appbar!: AppbarComponent;
    public sidebar: SidebarComponent;
    public footer: FooterComponent;
    public index: IndexComponent;
    public exp: ExperienceCalculatorService;

    // Services //
    public u;

    // Variables //
    public tempsDelayCarregaPag = 1000;
    public readonly debug = window.location.origin.includes("localhost") || window.location.origin.includes("192.168.1.");
    public scroll = window.pageYOffset;
    public window = window;

    // Idiomes //
    public idioma: string = "en";
    public idiomaIndex: number = 2;
    public conjuncio: string = "and";
    public ca: boolean;
    public es: boolean;
    public en: boolean;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public gas: GoogleAnalyticsService,
        public ts: ThemeService,
    ) {
        this.u = Utils;

        // Inicialitzar serveis //
        new ExperienceCalculatorService(this);

        
        
        // Ajustos NOMÉS al debugar //
        if (this.debug) {
            window["m"] = this;
            document.title = "Local";
            document.querySelector("link[rel*='icon']")!["href"] = "assets/favicon-local.ico";
            document.body.style.overflowX = "visible";

            // Google Analytics //
            localStorage.setItem("googleAnalyticsBlocked", "1");
        } else {
            this.printarFirmaAConsola();
        }
        if (localStorage.getItem("googleAnalyticsBlocked"))
            Utils.blockGoogleAnalytics();

        // Event al canviar de pàgina //
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Eliminar hover en mobils //
                if (this.esPantallaTactil()) {
                    Utils.removeHoverStyles();
                }
            }
        });
    }

    public log(t) { console.log(t); }
    public logDebug(t) { if (this.debug) console.log(t); }

    // Dispositius //
    // public esMobil() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    // public esPc() { return !this.esMobil() }
    public esMobil() { return this.esPantallaTactil() }
    public esPc() { return !this.esPantallaTactil() }
    public esPantallaMobil() { return window.innerWidth < 576; }
    public esPantallaPc() { return !this.esPantallaMobil(); }
    public esAndroid() { return /Android/i.test(navigator.userAgent); }
    public esIOS() { return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent); }
    public esSamsung() { return /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent); }
    public esXiaomi() { return /XiaoMi\/MiuiBrowser/i.test(navigator.userAgent); }
    public esPantallaTactil() { return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)); }
    public getAmpladaScrollbar() { return this.window.innerWidth - this.appbar.width(); }

    public printarFirmaAConsola() {
        const text = "%c" +
            "         __              ___ __  ___              \n" +
            "        / /___  ________/ (_)  |/  /___ ______    \n" +
            "   __  / / __ \\/ __/ __  / / /|_/ / __ \`/ ___/  \n" +
            "  / /_/ / /_/ / / / /_/ / / /  / / /_/ (__  )     \n" +
            "  \\____/\\____/_/  \\__,_/_/_/  /_/\\__,_/____/  \n";
        console.log(text, "color: #0cf; font-weight: bold");
    }

    // Forçar temes - debug //
    public force(tema) { Utils.setCookieDays("forçartema", tema) }
    public noforce() { Utils.removeCookie("forçartema") }


    // Funcions //
    afterRootFadeIn(funcio: Function) {
        setTimeout(async () => {
            funcio();
        }, $("app-root").is(":visible") ? 0 : this.tempsDelayCarregaPag); // Retard fadein pagina //
    }

}
