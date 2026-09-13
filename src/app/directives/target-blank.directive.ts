import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
    selector: 'a[href]:not([target=_self])',
    standalone: true
})
export class TargetBlankDirective {
    
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);

    // This directive changes the default behavior of the <a> links //
    // They will take you to a new page if it's not specified that //
    // they should remain on the same page using target = "_self" //

    ngOnInit() {
        this.renderer.setAttribute(this.el.nativeElement, 'target', '_blank');
        this.renderer.setAttribute(this.el.nativeElement, 'rel', 'noopener noreferrer');
    }
}
