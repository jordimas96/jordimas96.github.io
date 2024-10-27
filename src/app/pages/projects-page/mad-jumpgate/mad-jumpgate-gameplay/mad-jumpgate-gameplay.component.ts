import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-mad-jumpgate-gameplay',
    templateUrl: './mad-jumpgate-gameplay.component.html',
    styleUrl: './mad-jumpgate-gameplay.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
    ]
})
export class MadJumpgateGameplayComponent {

    @ViewChild('iframeRef') iframeRef: ElementRef;

    public carregarVideo = false;

    public placeholderWidth = 0;
    public placeholderHeight = 0;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
        
    }

    afterRootFadeIn() {
        this.posarIframeDinsLimits();
    }
    
    
    async iniciarVideo() {
        this.carregarVideo = true;

        await Utils.wait(0);

        this.posarIframeDinsLimits();
    }

    @HostListener('window:resize', ['$event'])
    posarIframeDinsLimits() {

        // Si el contingut està tancat, no es pot medir l'amplada del placeholder per a redimensionar l'iframe. Amb aquest codi //
        // obrim el contingut per a mesurar el placeholder i poder establir la mida del placeholder i posteriorment la de l'iframe. //
        // Ho necessitem per a que el jQuery faci l'animació slideDown bé (necessita saber la distancia total de l'animació que farà jQuery) //
        let $root = $("app-mad-jumpgate-gameplay");
        if (!$root.find(".contingut").is(":visible")) {
            $root.find(".contingut").show();
            this.placeholderWidth = $root.find(".iframe-i-placeholder").innerWidth()!;
            $root.find(".contingut").hide();
        } else this.placeholderWidth = $root.find(".iframe-i-placeholder").innerWidth()!;

        // Relació 16:9 //
        this.placeholderHeight = this.placeholderWidth / 16 * 9;

        var valorScale = this.placeholderWidth / this.placeholderWidth;

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
        let $contingut = $seccio.find(".contingut");
        let obert = $seccio.is("[data-open]");

        obert = !obert;
        if (obert) {
            $seccio.attr("data-open", "");
            $contingut.stop().slideDown(200, () => {
                this.iniciarVideo();
            });
        } else {
            $seccio.removeAttr("data-open");
            $contingut.stop().slideUp(200, () => {
                // this.carregarVideo = false;
            });
        }
    }
}
