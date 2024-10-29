import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-mad-jumpgate-joc',
    templateUrl: './mad-jumpgate-joc.component.html',
    styleUrl: './mad-jumpgate-joc.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class MadJumpgateJocComponent {

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
        // Ho necessitem per a que el jQuery faci l'animació slideDown bé (necessita saber la distancia total de l'animació que farà jQuery) //
        let $root = $("app-mad-jumpgate-joc");
        if (!$root.find(".contingut").is(":visible")) {
            $root.find(".contingut").show();
            this.placeholderWidth = $root.find(".iframe-i-placeholder").innerWidth()!;
            $root.find(".contingut").hide();
        } else this.placeholderWidth = $root.find(".iframe-i-placeholder").innerWidth()!;
            
        this.placeholderHeight = iframeHeight * this.placeholderWidth / iframeWidth;
        

        var valorScale = this.placeholderWidth / iframeWidth;

        $root.find("iframe").css("transform", `scale(${valorScale})`);
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
        let obert = $seccio.is("[data-open]");

        obert = !obert;
        if (obert) {
            $seccio.attr("data-open", "");
            $contingut.stop().slideDown(200, () => {
                this.iniciarJoc();
            });
        } else {
            $seccio.removeAttr("data-open");
            $contingut.stop().slideUp(200, () => {
                // this.carregarJoc = false;
            });
        }
    }
}
