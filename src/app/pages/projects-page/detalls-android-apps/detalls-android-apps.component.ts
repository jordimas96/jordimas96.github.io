import * as $ from "jquery";
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-detalls-android-apps',
    templateUrl: './detalls-android-apps.component.html',
    styleUrls: ['./detalls-android-apps.component.scss']
})
export class DetallsAndroidAppsComponent {

    @ViewChildren('video') videos: QueryList<ElementRef>;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Forçar reproduir vídeos, que a vegades l'autoplay no funciona //
        setTimeout(() => {
            this.videos.forEach((video) => {
                if (video.nativeElement) video.nativeElement.play();
            });
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
