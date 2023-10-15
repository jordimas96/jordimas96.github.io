import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: 'a[href]:not([target=_self])'
})
export class TargetBlankDirective {

    // This directive changes the default behavior of the <a> links //
    // They will take you to a new page if it's not specified that //
    // they should remain on the same page usinf target = "_self" //

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
        this.renderer.setAttribute(this.el.nativeElement, 'target', '_blank');
        this.renderer.setAttribute(this.el.nativeElement, 'rel', 'noopener noreferrer');
    }
}
