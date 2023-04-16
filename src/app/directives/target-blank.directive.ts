import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: 'a[href]:not([target=_self])'
})
export class TargetBlankDirective {

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
        this.renderer.setAttribute(this.el.nativeElement, 'target', '_blank');
        this.renderer.setAttribute(this.el.nativeElement, 'rel', 'noopener noreferrer');
    }
}
