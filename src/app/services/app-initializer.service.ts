import { ApplicationRef, Injectable } from "@angular/core";
import { filter, firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppInitializerService {

    private readonly FONS_URL = "assets/background/boles.webp";

    constructor(private appRef: ApplicationRef) { }


    async init() {

        let backgroundImageLoaded = this.carregarImatgeFons();

        // Aplicar fons al body //
        backgroundImageLoaded.then(() => document.body.style.backgroundImage = `url("${this.FONS_URL}")`);

        await Promise.race([
            Promise.all([
                backgroundImageLoaded,
                document.fonts.ready,
                firstValueFrom(this.appRef.isStable.pipe(filter(stable => stable))),
            ]),
            new Promise(resolve => setTimeout(resolve, 3000)),
        ]);

        setTimeout(() => {
            this.ocultarSplashScreen();
        }, 300);

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
