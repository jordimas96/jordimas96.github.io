import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-input-buscador',
    templateUrl: './input-buscador.html',
    styleUrl: './input-buscador.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        FormsModule
    ]
})
export class InputBuscador implements AfterViewInit {

    public m = inject(MainService);
    private router = inject(Router);

    @ViewChild("form") form: ElementRef<HTMLFormElement>;
    @ViewChild("input") input: ElementRef<HTMLInputElement>;

    public focus = false;
    public valor = "";
    public valorScale = 1.25;

    ngAfterViewInit() {
        this.calcularValorScale();
    }

    wrapper_mousedown(event: MouseEvent) {
        event.preventDefault();
        this.input.nativeElement.focus();
        this.focus = true;
    }

    buscar() {
        const query = this.input.nativeElement.value.trim();
        
        this.blur();

        setTimeout(() => this.m.appbar.toggleBuscador(), 300);

        this.router.navigate(["/search", query]);
    }

    blur() {
        this.valor = "";
        this.input.nativeElement.value = "";
        this.focus = false;
    }

    get textPlaceholder() { return ["Cerca...", "Buscar...", "Search..."][this.m.idiomaIndex]; }

    
    @HostListener('document:keydown.escape')
    onEscape() {
        this.blur();
    }

    @HostListener('window:resize')
    calcularValorScale() {
        if (!this.form) {
            this.valorScale = 1.25;
            return;
        }

        const padding = 0.04;
        const max = 1.75;
        
        let scale = document.documentElement.clientWidth / this.form.nativeElement.clientWidth - padding;
        this.valorScale = Math.min(scale, max);
    }

}
