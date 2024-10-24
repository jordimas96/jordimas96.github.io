import { Injectable } from "@angular/core";
import { MainService } from "./main.service";
import { ToastService } from "./toast.service";

@Injectable({
    providedIn: 'root'
})
export class RickrollService {

    readonly TOTAL_CLICKS = 7;

    private clicksLeft = this.TOTAL_CLICKS;
    private lastClickTime: number = 0;
    private cooldown = false;

    constructor(
        public m: MainService,
        private toast: ToastService,
    ) { }


    public click() {
        if (this.cooldown) return;

        const currentTime = Date.now();
        const elapsedTime = currentTime - this.lastClickTime;
        this.lastClickTime = currentTime;

        if (elapsedTime < 1000)
            this.clicksLeft--;
        else
            this.clicksLeft = this.TOTAL_CLICKS;

        if (this.clicksLeft > 0) {
            let text = [
                `Estàs a ${this.clicksLeft} passos del paradís`,
                `Estás a ${this.clicksLeft} pasos del paraíso`,
                `You are now ${this.clicksLeft} steps away from heaven`
            ];

            this.toast.open(text[this.m.idiomaIndex]);

        } else {
            window.open("https://jordimas96.github.io/r/rickroll", "_self");

            this.clicksLeft = this.TOTAL_CLICKS;
            this.cooldown = true;
            setTimeout(() => {
                this.cooldown = false;
            }, 2000);
        }
    }
}
