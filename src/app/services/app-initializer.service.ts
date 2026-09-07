import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppInitializerService {

    private readonly FONS_URL = "assets/background/boles.webp";

    constructor() { }


    async init() {

        let backgroundImageLoaded = this.carregarImatgeFons();

        // Aplicar fons al body //
        backgroundImageLoaded.then(() => document.body.style.backgroundImage = `url("${this.FONS_URL}")`);

        Promise.race([
            Promise.all([
                backgroundImageLoaded,
                document.fonts.ready,
            ]),
            new Promise(resolve => setTimeout(resolve, 3000)),
        ]).then(() => {
            setTimeout(() => {
                this.ocultarSplashScreen();
            }, 450);
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
        let splashScreen = document.getElementById("splash-screen");
        if (!splashScreen) return;

        splashScreen.style.opacity = "0";
        splashScreen.style.pointerEvents = "none";

        splashScreen.addEventListener("transitionend", () => splashScreen.remove(), { once: true });

        setTimeout(() => {
            splashScreen.remove();
        }, 1000);
    }




}
