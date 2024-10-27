import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-dark-mode',
    templateUrl: './dark-mode.component.html',
    styleUrl: './dark-mode.component.scss',
    standalone: true,
    imports: []
})
export class DarkModeComponent {

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
    


    
    async animacioDarkMode(nomBoto) {
        // Sistema antic sense cortina //
        // $("*").css("transition", "background-color 0.3s linear, color 0.3s linear, border-color 0.3s linear, filter 0.3s linear");
        // if (nomBoto == "dark") this.accioDarkMode();
        // if (nomBoto == "auto") this.accioAutoDarkMode();
        // await Utils.wait(600);
        // $("*").css("transition", "");
        // return;



        // Si es click al auto i no cal fer efecte, no el fem //
        if (nomBoto == "auto" && this.ts.modeFosc == Utils.systemDarkMode()) {
            this.accioAutoDarkMode();
            $(".botoAutoMode").fadeOut(200);
            return;
        }

        // Variables //
        let spread = Utils.mesGran(window.innerWidth, window.innerHeight);
        let blur = 500;
        var color = this.ts.modeFosc ? "var(--color-l-8)" : "var(--color-fosc)";


        // Transicions //
        $("*:not(.botoDarkMode)").css("transition", "none");

        $(".botoDarkMode, .botoAutoMode").prop("disabled", true);

        // Colocar shadow al primer punt //
        $(".botoDarkMode").css({
            "z-index": "1000000",
            "box-shadow": `0 0 0 0 ${color}`
        });

        await Utils.wait(0);

        // 1. Transicio spread, expandir //
        $(".botoDarkMode")
            .addClass("transicio-1")
            .css({
                "box-shadow": `0 0 ${blur}px ${spread}px ${color}`
            });




        await Utils.wait(400);

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
        $(".botoDarkMode").css({ "box-shadow": `100vw -100vh ${blur}px ${spread * 1.15}px ${color}` });

        await Utils.wait(0);

        $(".botoDarkMode").addClass("transicio-2");

        // 2. Transicio marxar cortina //
        // $(".botoDarkMode").css({ "box-shadow": `100vw 100vh ${blur}px ${spread}px transparent` });
        $(".botoDarkMode").css({ "box-shadow": `100vw -100vh 0 0 ${color}` });

        await Utils.wait(400);

        $(".botoDarkMode").removeClass("transicio-2");

        // 3. Tornar a estat inicial sense transició //
        $(".botoDarkMode")
            .css({
                "z-index": "auto",
                "box-shadow": "none"
            });

        $("*:not(.botoDarkMode)").css("transition", "");
        $(".botoDarkMode, .botoAutoMode").prop("disabled", false);

    }

    accioDarkMode() {
        this.ts.modeFosc = !this.ts.modeFosc;
        this.ts.actTema();
        Utils.setCookieDays("darkmode", this.ts.modeFosc ? 1 : 0)
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
