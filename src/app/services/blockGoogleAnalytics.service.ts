import { Injectable } from "@angular/core";
import { MainService } from "./main.service";

@Injectable({
    providedIn: 'root'
})
export class BlockGoogleAnalyticsService {

    private readonly KEY = "googleAnalyticsBlocked";
    private isBlocked = false;

    constructor(private m: MainService) {
        if (m.debug || localStorage.getItem(this.KEY)) {
            this.block();
        }
        
    }

    public block() {
        localStorage.setItem(this.KEY, "1");
        window['ga-disable-G-W0GMXKXDST'] = true;
        this.isBlocked = true;
    }

    private numClicks = 1;
    private lastClickTime: number = 0;
    public hiddenButtonClick() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.lastClickTime;
        this.lastClickTime = currentTime;
    
        if (elapsedTime < 300)
            this.numClicks++;
        else
            this.numClicks = 1;

        if (this.m.debug) console.log("%cclick " + this.numClicks, `color: hsl(${this.numClicks * 12}, 100%, 50%)`);
    
        if (this.numClicks >= 10) {
            if (this.isBlocked)
                console.log("%cGoogle Analytics already were blocked on this device", "color: lime");
            else {
                this.block();
                alert("Google Analytics blocked on this device");
            }
        }
    }
}
