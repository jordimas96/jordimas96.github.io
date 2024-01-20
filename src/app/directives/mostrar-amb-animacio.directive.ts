import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Utils } from '../shared/utils';

@Directive({
    selector: '[appMostrarAmbAnimacio]'
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
                    // Retard animació //
                    await Utils.wait(100 + Math.random() * 150);
                    
                    this.renderer.addClass(entry.target, 'animacio');
                    
                    this.renderer.addClass(entry.target, 'mostrat');
                    
                    this.timeoutTreureAnimacio = setTimeout(() => {
                        this.renderer.removeClass(entry.target, 'animacio');
                    }, 500);
                } else {
                    this.renderer.removeClass(entry.target, 'mostrat');
                    clearTimeout(this.timeoutTreureAnimacio);
                }
            });
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
