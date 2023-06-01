import { Component, ElementRef, HostListener } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrls: ['./mad-jumpgate.component.scss']
})
export class MadJumpgateComponent {

    public carregar = false;
    public fullScreen = false;

    public placeholderWidth=0;
    public placeholderHeight=0;

    constructor(
        public m: MainService,
        private elementRef: ElementRef
    ) {

    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // this.posarIframeDinsLimits();
    }

    afterRootFadeIn() {
        // this.iniciarJoc();
    }
    
    
    iniciarJoc() {
        this.carregar = true;
        setTimeout(() => {
            this.posarIframeDinsLimits();
        }, 0);
    }
    goFullScreen() {
        this.fullScreen = true;
    }

    @HostListener('window:resize', ['$event'])
    posarIframeDinsLimits() {
        var iframeWidth = 1920;
        var iframeHeight = 1080;
        if (!this.fullScreen) {
            this.placeholderWidth = $(".div-mad-jumpgate").innerWidth()!;
            this.placeholderHeight = iframeHeight * this.placeholderWidth / iframeWidth;
        

            var valorScale = this.placeholderWidth / iframeWidth;

            $("iframe").css("transform", `scale(${valorScale})`);
        }
    }
}
