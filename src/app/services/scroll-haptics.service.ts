import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollHapticsService implements OnDestroy {

    private readonly FORÇA_VIBRACIO = 5;

    private scrollUsuari = false;
    private pointerStartY = 0;

    private haVibratAlPrincipi = false;
    private haVibratAlFinal = false;

    private readonly THRESHOLD = 20;
    private readonly POINTER_THRESHOLD = 5;

    private onPointerDown = (event: PointerEvent) => {
        this.pointerStartY = event.clientY;
        this.scrollUsuari = false;
    };

    private onPointerMove = (event: PointerEvent) => {
        const moviment = Math.abs(event.clientY - this.pointerStartY);

        if (moviment >= this.POINTER_THRESHOLD) {
            this.scrollUsuari = true;
        }
    };

    private onWheel = () => {
        this.scrollUsuari = true;
    };

    private onScroll = () => {
        if (!this.scrollUsuari) {
            return;
        }

        const y = window.scrollY;
        const doc = document.documentElement;

        const maxY = doc.scrollHeight - window.innerHeight;

        if (maxY <= 0) {
            return;
        }

        // PRINCIPI
        if (y <= 0) {
            if (!this.haVibratAlPrincipi) {
                this.haVibratAlPrincipi = true;
                this.vibrar();
            }
        } else if (y > this.THRESHOLD) {
            this.haVibratAlPrincipi = false;
        }

        // FINAL
        if (y >= maxY - 1) {
            if (!this.haVibratAlFinal) {
                this.haVibratAlFinal = true;
                this.vibrar();
            }
        } else if (y < maxY - this.THRESHOLD) {
            this.haVibratAlFinal = false;
        }
    };

    constructor() {
        window.addEventListener('pointerdown', this.onPointerDown);
        window.addEventListener('pointermove', this.onPointerMove);
        window.addEventListener('wheel', this.onWheel);
        window.addEventListener('scroll', this.onScroll);
    }

    private vibrar() {
        navigator.vibrate?.(0);
        navigator.vibrate?.(this.FORÇA_VIBRACIO);
    }

    ngOnDestroy() {
        window.removeEventListener('pointerdown', this.onPointerDown);
        window.removeEventListener('pointermove', this.onPointerMove);
        window.removeEventListener('wheel', this.onWheel);
        window.removeEventListener('scroll', this.onScroll);
    }
}
