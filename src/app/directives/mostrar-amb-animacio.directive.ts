import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Utils } from 'src/app/shared/utils';

@Directive({
    selector: '[appMostrarAmbAnimacio]',
    standalone: true
})
export class MostrarAmbAnimacioDirective implements OnInit, OnDestroy {

    private observer: IntersectionObserver;
    private timeoutTreureAnimacio: NodeJS.Timeout;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        renderer.addClass(el.nativeElement, 'ocult-animacio');
    }

    ngOnInit() {

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(async entry => {
                if (entry.isIntersecting) {
                    await this.mostrar(entry);
                } else {
                    this.ocultar(entry);
                }
            });
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer)
            this.observer.disconnect();
    }

    async mostrar(entry) {
        if (!entry.isVisible) {

            const ratio = entry.intersectionRatio;

            let delay = 0;

            // Si l'element està molt dins la pantalla, ens saltem el delay //
            if (ratio < 0.2) {
                // Recuperem delay de les dades de l'element prèviament guardades. Si no hi és, el calculem (només si entra a poc a poc) //
                delay = this.el["animationDelay"];
                if (!delay) {
                    delay = 100 + this.getPositionAmongSiblings() * 30
                    this.el["animationDelay"] = delay;
                }
            }

            if (delay > 0) {
                await Utils.wait(delay);
            }

            this.renderer.addClass(entry.target, 'transicions');
            this.renderer.addClass(entry.target, 'mostrat');

            this.timeoutTreureAnimacio = setTimeout(() => {
                this.renderer.removeClass(entry.target, 'transicions');
            }, 300);
        }
    }

    ocultar(entry) {
        clearTimeout(this.timeoutTreureAnimacio);
        this.renderer.removeClass(entry.target, 'transicions');
        this.renderer.removeClass(entry.target, 'mostrat');
    }

    getPositionAmongSiblings() {
        // Aconseguir la posició de l'element entre els seus germans i cosins //
        var currentElement = $(this.el.nativeElement);
        var sameLevelElements = currentElement
            .add('[appMostrarAmbAnimacio]')
            .add(currentElement)
            .filter(function (i, e) {
                // Comptar pares fins al segon nivell, o sigui germans i cosins //
                return $(e).parents()[2] == currentElement.parents()[2];
            });

        return sameLevelElements.index(currentElement);
    }
}
