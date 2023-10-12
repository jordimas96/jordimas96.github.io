import * as $ from "jquery";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-detalls-android-apps',
    templateUrl: './detalls-android-apps.component.html',
    styleUrls: ['./detalls-android-apps.component.scss']
})
export class DetallsAndroidAppsComponent {

    @ViewChild('videoWallpaperBlurrer') videoWallpaperBlurrer: ElementRef;
    @ViewChild('videoSusTracker') videoSusTracker: ElementRef;
    @ViewChild('videoBreakingBall') videoBreakingBall: ElementRef;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Forçar reproduir vídeos, que a vegades l'autoplay no funciona //
        setInterval(() => {
            if (this.videoWallpaperBlurrer && this.videoWallpaperBlurrer.nativeElement) this.videoWallpaperBlurrer.nativeElement.play();
            if (this.videoSusTracker && this.videoSusTracker.nativeElement)             this.videoSusTracker.nativeElement.play();
            if (this.videoBreakingBall && this.videoBreakingBall.nativeElement)         this.videoBreakingBall.nativeElement.play();
        }, 1000);
        
    }

    
    afterRootFadeIn() { }
  
  
    toggleSeccio(boto) {
        let $seccio = $(boto).parent();
        let $fletxa = $seccio.find(".fletxa");
        let $contingut = $seccio.find(".contingut");
        let obert = $fletxa.is("[data-open]");

        obert = !obert;
        if (obert) {
            $fletxa.attr("data-open", "");
            $contingut.stop().slideDown(200);
        } else {
            $fletxa.removeAttr("data-open");
            $contingut.stop().slideUp(200);
        }
    }
}
