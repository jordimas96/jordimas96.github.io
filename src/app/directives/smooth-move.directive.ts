import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
    selector: '[smoothMove]'
})
export class SmoothMoveDirective implements AfterViewInit, OnDestroy {
    private duplicateElement: HTMLElement;
    private mutationObserver: MutationObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit() {
        this.createDuplicate();
        this.applyStyles();
        this.observeChanges();
        this.updateDuplicate();

        setInterval(() => {
            this.updateDuplicate();
        }, 300);
    }

    ngOnDestroy() {
        this.mutationObserver.disconnect();
    }

    private createDuplicate() {
        const originalElement = this.el.nativeElement;
        this.duplicateElement = originalElement.cloneNode(true);
        this.renderer.insertBefore(originalElement.parentNode, this.duplicateElement, originalElement);
    }

    private applyStyles() {
        const originalElement = this.el.nativeElement;
        this.renderer.setStyle(originalElement, 'visibility', 'hidden');
        this.renderer.setStyle(this.duplicateElement, 'position', 'absolute');
        this.renderer.setStyle(this.duplicateElement, 'top', '0');
        this.renderer.setStyle(this.duplicateElement, 'left', '0');
        this.renderer.setStyle(this.duplicateElement, 'transition', 'all 0.3s ease');
        // this.renderer.setStyle(this.duplicateElement, 'will-change', 'transform');

        // Clonar contenido estático
        const originalContent = originalElement.innerHTML;
        this.duplicateElement.innerHTML = originalContent;
    }

    private observeChanges() {
        this.mutationObserver = new MutationObserver(() => {
            this.updateDuplicate();
        });

        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };

        this.mutationObserver.observe(this.el.nativeElement, config);
    }

    private updateDuplicate() {
        const originalElement = this.el.nativeElement;
        const originalRect = originalElement.getBoundingClientRect();

        const originalStyles = getComputedStyle(originalElement);
        const originalPaddingTop = parseFloat(originalStyles.paddingTop);
        const originalPaddingLeft = parseFloat(originalStyles.paddingLeft);
        const originalOffsetTop = originalElement.offsetTop;
        const originalOffsetLeft = originalElement.offsetLeft;

        this.renderer.setStyle(this.duplicateElement, 'transform', `translate(${originalOffsetLeft}px, ${originalOffsetTop}px)`);
        this.renderer.setStyle(this.duplicateElement, 'width', `${originalRect.width}px`);
        this.renderer.setStyle(this.duplicateElement, 'height', `${originalRect.height}px`);
    }
}
