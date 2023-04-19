import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Utils {

    constructor() { }

    // Cookies //
    public static setCookie(cname, cvalue, exdays = 36500) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    public static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    public static removeCookie(cname) {
        this.setCookie(cname, null, -1);
    }
    public static hasCookie(cname) {
        return this.getCookie(cname) != "";
    }













    // Utils //
    public static esMobil() { return window.innerWidth; }
    public static esPc() { return !this.esMobil(); }
    public static objPle(obj) {
        if (!obj) return false;
        else return JSON.stringify(obj) != "{}";
    }
    public static arrayConte(array, valor) {
        return array.includes(valor);
    }
    public static scroll0() { window.scroll(0, 0); }
    public static getAlturaAppbar() {
        return $(".appbar").outerHeight();
    }


    public static systemDarkMode() {
        return !(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
    }


    public static fadeIn(selector, retard = 0) {
        setTimeout(() => {
            $(selector).addClass("mostrat");
        }, retard);
    }











    public static numberInRange(n, min, max) {
        if (n < min) n = min;
        if (n > max) n = max;
        return n;
    }
    public static numberIsInRange(n, min, max) {
        return (n >= min && n <= max);
    }
    public static format00(n = 0) { return ("0" + n).slice(-2); }
    public static format000(n = 0) { return ("00" + n).slice(-3); }
    public static format0000(n = 0) { return ("000" + n).slice(-4); }



}
