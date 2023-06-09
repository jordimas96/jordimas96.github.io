import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

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

    afterRootFadeIn() {
        this.posarIframeDinsLimits();
    }
    
    
    async iniciarJoc() {
        this.carregarJoc = true;

        await Utils.wait(0);

        this.posarIframeDinsLimits();
    }

    @HostListener('window:resize', ['$event'])
    posarIframeDinsLimits() {
        var iframeWidth = 1920;
        var iframeHeight = 1080;

        // Si el contingut està tancat, no es pot medir l'amplada del placeholder per a redimensionar l'iframe. Amb aquest codi //
        // obrim el contingut per a mesurar el placeholder i poder establir la mida del placeholder i posteriorment la de l'iframe. //
        // Ho necessitem per a que el JQuery faci l'animació slideDown bé (necessita saber la distancia total de l'animació que farà jQuery) //
        if (!$(".contingut").is(":visible")) {
            $(".contingut").show();
            this.placeholderWidth = $(".iframe-i-placeholder").innerWidth()!;
            $(".contingut").hide();
        } else this.placeholderWidth = $(".iframe-i-placeholder").innerWidth()!;
            
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

    async toggleSeccio(boto) {
        let $seccio = $(boto).parent();
        let $fletxa = $seccio.find(".fletxa");
        let $contingut = $seccio.find(".contingut");
        let obert = $fletxa.is("[data-open]");

        obert = !obert;
        if (obert) {
            $fletxa.attr("data-open", "");
            $contingut.stop().slideDown(200, () => {
                this.iniciarJoc();
            });
        } else {
            $fletxa.removeAttr("data-open");
            $contingut.stop().slideUp(200, () => {
                // this.carregarJoc = false;
            });
        }
    }
}
