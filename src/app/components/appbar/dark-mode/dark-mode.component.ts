import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-dark-mode',
    templateUrl: './dark-mode.component.html',
    styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {

    constructor(public m: MainService) { }
    
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
        if (nomBoto == "auto" && this.m.modeFosc == Utils.systemDarkMode()) {
            this.accioAutoDarkMode();
            $(".botoAutoMode").fadeOut(200);
            return;
        }

        // Variables //
        let spread = Utils.mesGran(window.innerWidth, window.innerHeight);
        let blur = 500;
        var color = this.m.modeFosc ? "var(--color-clar)" : "var(--color-fosc)";


        // Transicions //
        $("*:not(.botoDarkMode)").css("transition", "none");

        $(".botoDarkMode, .botoAutoMode").prop("disabled", true);

        // Colocar shadow al primer punt //
        $(".botoDarkMode").css({
            "z-index": "10000",
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
        $(".botoDarkMode").css({ "box-shadow": `100vw 100vh ${blur}px ${spread * 1.15}px ${color}` });

        await Utils.wait(0);

        $(".botoDarkMode").addClass("transicio-2");

        // 2. Transicio color a transparent //
        // $(".botoDarkMode").css({ "box-shadow": `100vw 100vh ${blur}px ${spread}px transparent` });
        $(".botoDarkMode").css({ "box-shadow": `100vw 100vh 0 0 ${color}` });

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
        this.m.modeFosc = !this.m.modeFosc;
        this.m.appbar.actTema();
        Utils.setCookieDays("darkmode", this.m.modeFosc ? 1 : 0)
    }

    accioAutoDarkMode() {
        this.m.modeFosc = Utils.systemDarkMode();
        this.m.appbar.actTema();
        Utils.removeCookie("darkmode");
    }

    setDarkMode() {
        // Establir variable dark mode //
        this.m.modeFosc = !!parseInt(Utils.getCookie("darkmode"));

        // Si no te cookie el traiem de system //
        if (!Utils.hasCookie("darkmode"))
            this.m.modeFosc = Utils.systemDarkMode();
    }

}
