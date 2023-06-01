import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrls: ['./mad-jumpgate.component.scss']
})
export class MadJumpgateComponent {

    @ViewChild('iframeRef') iframeRef: ElementRef;

    public carregarJoc = false;

    public placeholderWidth = 0;
    public placeholderHeight = 0;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() { }
    
    
    iniciarJoc() {
        this.carregarJoc = true;
        setTimeout(() => {
            this.posarIframeDinsLimits();
        }, 0);
    }

    @HostListener('window:resize', ['$event'])
    posarIframeDinsLimits() {
        var iframeWidth = 1920;
        var iframeHeight = 1080;
        this.placeholderWidth = $(".div-mad-jumpgate").innerWidth()!;
        this.placeholderHeight = iframeHeight * this.placeholderWidth / iframeWidth;
        

        var valorScale = this.placeholderWidth / iframeWidth;

        $("iframe").css("transform", `scale(${valorScale})`);
    }

    fullScreen() {
        const iframe = this.iframeRef.nativeElement;

        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }
}
