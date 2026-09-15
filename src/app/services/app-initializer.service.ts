import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppInitializerService {

    private readonly FONS_URL = "assets/background/boles.webp";

    async init() {

        let backgroundImageLoaded = this.carregarImatgeFons();

        // Aplicar fons al body //
        backgroundImageLoaded.then(() => document.body.style.backgroundImage = `url("${this.FONS_URL}")`);

        const tempsMin = 500;
        const tempsMax = 3000;

        Promise.race([
            Promise.all([
                backgroundImageLoaded,
                document.fonts.ready,
                new Promise(resolve => setTimeout(resolve, tempsMin)),
            ]),
            new Promise(resolve => setTimeout(resolve, tempsMax)),
        ]).then(() => {
            this.ocultarSplashScreen();
        });

    }

    carregarImatgeFons(): Promise<void> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = this.FONS_URL;

            if (img.complete) {
                resolve();
            } else {
                img.onload = () => resolve();
                img.onerror = reject;
            }
        });
    }

    ocultarSplashScreen() {
        let splashScreen = document.querySelector<HTMLElement>("#splash-screen");
        let jmas = document.querySelector<HTMLElement>("#splash-screen > .jmas");
        if (!splashScreen || !jmas) return;


        jmas.classList.add("superzoom");

        // Amb 0.6s de retard //
        splashScreen.style.opacity = "0";
        splashScreen.style.pointerEvents = "none";
        
        splashScreen.addEventListener("transitionend", () => splashScreen.remove(), { once: true });
    }

}
