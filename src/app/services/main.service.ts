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
    public tempsDelayCarregaPag = 600;
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
                if (this.esPantallaTactil) {
                    Utils.removeHoverStyles();
                }
            }
        });
    }

    public log(t) { console.log(t); }
    public logDebug(t) { if (this.debug) console.log(t); }

    // Dispositius //
    // public get esMobil() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    // public get esPc() { return !this.esMobil() }
    public get esMobil() { return this.esPantallaTactil }
    public get esPc() { return !this.esPantallaTactil }
    public get esPantallaMobil() { return window.innerWidth < 576; }
    public get esPantallaPc() { return !this.esPantallaMobil; }
    public get esAndroid() { return /Android/i.test(navigator.userAgent); }
    public get esIOS() { return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent); }
    public get esSamsung() { return /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent); }
    public get esXiaomi() { return /XiaoMi\/MiuiBrowser/i.test(navigator.userAgent); }
    public get esPantallaTactil() { return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)); }
    public get ampladaScrollbar() { return window.innerWidth - this.appbar.width(); }

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


    public sanitize(url) { return this.sanitizer.bypassSecurityTrustResourceUrl(url); }


    // Funcions //
    afterRootFadeIn(funcio: Function) {
        setTimeout(async () => {
            funcio();
        }, $("app-root").is(":visible") ? 0 : this.tempsDelayCarregaPag); // Retard fadein pagina //
    }

    scrollTo(element: string | Element) {
        if (typeof (element) == "string")
            element = document.querySelector(element)!;

        if (!element) return;

        const offset = this.appbar.height() + this.index.indexRef.nativeElement.offsetHeight;

        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({ top: rect.top + scrollTop - offset });
    }

}
