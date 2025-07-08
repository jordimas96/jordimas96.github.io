import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { AppbarComponent } from "src/app/components/appbar/appbar.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { IndexComponent } from "src/app/components/index/index.component";
import { SidebarComponent } from "src/app/components/sidebar/sidebar.component";
import { Utils } from "src/app/shared/utils";
import { environment } from "src/environments/environment";

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

    // Services //
    public u;

    // Variables //
    public tempsDelayCarregaPag = 1000;
    public readonly debug = window.location.hostname == "localhost" || window.location.hostname.includes("192.168.1.");
    public scroll = window.pageYOffset;
    public window = window;
    public env = environment;

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
        private sanitizer: DomSanitizer,
    ) {
        this.u = Utils;


        // Ajustos NOMÉS al debugar //
        if (this.debug) {
            window["m"] = this;
            document.title = "Local";
            document.querySelector("link[rel*='icon']")!["href"] = "assets/favicon-local.ico";
            // document.body.style.overflowX = "visible";
        } else {
            this.printarFirmaAConsola();
        }

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
    public esPantallaMobil() { return Math.min(window.innerWidth,screen.width) < 576; }
    public esPantallaPc() { return !this.esPantallaMobil(); }
    public esAndroid() { return /Android/i.test(navigator.userAgent); }
    public esIOS() { return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent); }
    public esSamsung() { return /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent); }
    public esXiaomi() { return /XiaoMi\/MiuiBrowser/i.test(navigator.userAgent); }
    public esPantallaTactil() { return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)); }
    public getAmpladaScrollbar() { return window.innerWidth - this.appbar.width(); }

    public printarFirmaAConsola() {
        let colors = ["#0cf", "magenta", "gold", "lime"];
        let color = colors[Math.floor(Math.random() * colors.length)];
        const text = "%c" +
            "         __              ___ __  ___              \n" +
            "        / /___  ________/ (_)  |/  /___ ______    \n" +
            "   __  / / __ \\/ __/ __  / / /|_/ / __ \`/ ___/  \n" +
            "  / /_/ / /_/ / / / /_/ / / /  / / /_/ (__  )     \n" +
            "  \\____/\\____/_/  \\__,_/_/_/  /_/\\__,_/____/  \n";
        console.log(text, `color: ${color}; font-weight: bold`);
    }

    // Forçar temes - debug //
    public force(tema) { Utils.setCookieDays("forçartema", tema) }
    public noforce() { Utils.removeCookie("forçartema") }


    public sanitize(url) { return this.sanitizer.bypassSecurityTrustResourceUrl(url); }


    // Funcions //
    afterRootFadeIn(funcio: Function) {
        setTimeout(async () => {
            funcio();
        }, $("app-root").is(":visible") ? 0 : this.tempsDelayCarregaPag); // Retard fadein pagina //
    }

}
