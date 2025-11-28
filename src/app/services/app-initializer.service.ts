import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppInitializerService {

    private readonly FONS_URL = "assets/background/boles.webp";

    constructor() { }
    

    async init() {

        let carregarImatgeFonsPromise = this.carregarImatgeFons();

        // Aplicar fons al body //
        carregarImatgeFonsPromise.then(() => document.body.style.backgroundImage = `url("${this.FONS_URL}")`);

        await Promise.all([
            carregarImatgeFonsPromise,
            document.fonts.ready
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
        setTimeout(() => splashScreen.remove(), 2000);
    }




}
