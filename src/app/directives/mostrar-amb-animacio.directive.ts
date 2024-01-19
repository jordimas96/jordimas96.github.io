import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Utils } from '../shared/utils';

@Directive({
    selector: '[appMostrarAmbAnimacio]'
})
export class MostrarAmbAnimacioDirective implements OnInit, OnDestroy {
    private observer: IntersectionObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        renderer.addClass(el.nativeElement, 'ocult-animacio');
    }

    ngOnInit(): void {

        this.createObserver();
        this.observeElement();
    }

    ngOnDestroy(): void {
        this.disconnectObserver();
    }

    private createObserver(): void {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(async entry => {
                if (entry.isIntersecting) {
                    await Utils.wait(100 + Math.random() * 150);
                    this.renderer.addClass(entry.target, 'mostrat');
                } else {
                    this.renderer.removeClass(entry.target, 'mostrat');
                }
            });
        });
    }

    private observeElement(): void {
        this.observer.observe(this.el.nativeElement);
    }

    private disconnectObserver(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
