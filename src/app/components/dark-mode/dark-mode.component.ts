import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-dark-mode',
    templateUrl: './dark-mode.component.html',
    styleUrl: './dark-mode.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class DarkModeComponent {

    public botonsActius = true;

    constructor(
        public m: MainService,
        public ts: ThemeService
    ) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));


        this.setDarkMode();


        // Mostrar boto Dark Mode Auto si cal //
        if (Utils.hasCookie("darkmode")) $(".botoAutoMode").fadeIn(150);
    }

    afterRootFadeIn() {
    }


    async animacioDarkMode(nomBoto: "dark" | "auto") {
        this.animacioDarkModeTipusCortinaShadow(nomBoto);
        // this.animacioDarkModeTipusFade(nomBoto);
    }

    // Mètode 2 //
    async animacioDarkModeTipusCortinaShadow(nomBoto: "dark" | "auto") {
        // Si es click al auto i no cal fer efecte, no el fem //
        if (nomBoto == "auto" && this.ts.modeFosc == Utils.systemDarkMode()) {
            this.accioAutoDarkMode();
            $(".botoAutoMode").fadeOut(200);
            return;
        }

        // Variables //
        let spread = Math.max(window.innerWidth, window.innerHeight);
        let blur = 500;
        var color1 = this.ts.modeFosc ? "#28d4ff" : "#008";
        var color2 = this.ts.modeFosc ? "#6c7ca4" : "#111";


        $("*:not(.botoDarkMode, .botoDarkMode > i)").css("transition", "none");
        $(".sidebar").css("overflow", "visible");
        $("*").css("pointer-events", "none");
        this.botonsActius = false;


        // Colocar shadow al primer punt //
        $(".botoDarkMode").css({
            "z-index": "1000000",
            "box-shadow": `0 0 0 0 ${color1}`
        });

        await Utils.wait(0);

        // 1. Transicio spread, expandir //
        $(".botoDarkMode")
            .addClass("transicio-1")
            .css({
                "box-shadow": `0 0 ${blur}px ${spread}px ${color1}`
            });
        
        $(".botoDarkMode > i")
            .css("transform", `rotate(${this.ts.modeFosc ? 67.5 : 360}deg)`);
            



        await Utils.wait(700);

        // Acció canviar mode (instantani) //
        if (nomBoto == "dark") {
            this.accioDarkMode();
            $(".botoAutoMode").show();
        }
        if (nomBoto == "auto") {
            this.accioAutoDarkMode();
            $(".botoAutoMode").hide();
        }

        $(".botoDarkMode").removeClass("transicio-1");
        $(".botoDarkMode").css({ "box-shadow": `100vw -100vh ${blur}px ${spread * 1.15}px ${color1}` });

        await Utils.wait(0);

        $(".botoDarkMode").addClass("transicio-2");

        // 2. Transicio marxar cortina //
        // $(".botoDarkMode").css({ "box-shadow": `100vw 100vh ${blur}px ${spread}px transparent` });
        $(".botoDarkMode").css({ "box-shadow": `100vw -100vh 0 0 ${color2}` });

        await Utils.wait(500);

        $(".botoDarkMode").removeClass("transicio-2");

        // 3. Tornar a estat inicial sense transició //
        $(".botoDarkMode")
            .css({
                "z-index": "auto",
                "box-shadow": "none"
            });


        $("*:not(.botoDarkMode, .botoDarkMode > i)").css("transition", "");
        $(".sidebar").css("overflow", "");
        $("*").css("pointer-events", "");
        this.botonsActius = true;

    }

    // Mètode 1 //
    async animacioDarkModeTipusFade(nomBoto: "dark" | "auto") {
        // Sistema antic sense cortina //
        $("*").css("transition", "background-color 0.3s linear, color 0.3s linear, border-color 0.3s linear, filter 0.3s linear");
        if (nomBoto == "dark") this.accioDarkMode();
        if (nomBoto == "auto") this.accioAutoDarkMode();
        await Utils.wait(600);
        $("*").css("transition", "");
    }

    accioDarkMode() {
        this.ts.modeFosc = !this.ts.modeFosc;
        this.ts.actTema();
        Utils.setCookieDays("darkmode", this.ts.modeFosc)
    }

    accioAutoDarkMode() {
        this.ts.modeFosc = Utils.systemDarkMode();
        this.ts.actTema();
        Utils.removeCookie("darkmode");
    }

    setDarkMode() {
        // Establir variable dark mode //
        this.ts.modeFosc = !!parseInt(Utils.getCookie("darkmode"));

        // Si no te cookie el traiem de system //
        if (!Utils.hasCookie("darkmode"))
            this.ts.modeFosc = Utils.systemDarkMode();
    }

}
