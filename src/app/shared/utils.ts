

export class Utils {
    
    // Utils web //

    public static getDocument() { return document; }

    // Cookies //
    public static setCookie(cname, cvalue, exseconds = 3600) {
        if (typeof (cvalue) == "boolean") cvalue = cvalue ? 1 : 0;
        const d = new Date();
        d.setTime(d.getTime() + (exseconds * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    public static setCookieDays(cname, cvalue, exdays = 36500) {
        this.setCookie(cname, cvalue, exdays * 24 * 60 * 60);
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
    public static addConjunctionBetweenThe2Last(array: Array<string>, conjunction: string) {
        if (array.length < 2) return array;
        let text = array.join(", ");
        let index = text.lastIndexOf(", ");
        return text.substring(0, index) + " " + conjunction + " " + text.substring(index + 1);
    }
    public static objPle(obj): boolean {
        if (!obj) return false;
        else return !!Object.keys(obj).length;
    }
    public static arrayConte(array, valor) {
        return array.includes(valor);
    }
    public static limit(n: number, min: number, max: number) {
        return Math.max(min, Math.min(n, max));
    }
    public static getRouteActual() {
        return location.pathname.split("/")[1];
    }

    public static wait(ms: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }


    public static scroll(x) { window.scroll({ top: x, left: 0, behavior: "instant" }); }
    public static getAmpladaPantalla() {
        return screen.width;
    }


    public static systemDarkMode() {
        return !(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
    }


    public static fadeIn(selector, retard = 0) {
        setTimeout(() => {
            $(selector).addClass("mostrat");
        }, retard);
    }
    public static fadeOut(selector, retard = 0) {
        setTimeout(() => {
            $(selector).removeClass("mostrat");
        }, retard);
    }



    public static rgbToHex(rgb: string): string {
        const match = rgb.match(/\d+/g);
      
        if (!match || match.length !== 3) {
            throw new Error('Invalid RGB color format');
        }
      
        const r = parseInt(match[0], 10);
        const g = parseInt(match[1], 10);
        const b = parseInt(match[2], 10);
      
        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            throw new Error('Invalid RGB color values');
        }
      
        const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
      
        return `#${hex}`;
    }

    public static rgbaToHex(rgba: string): string {
        // Verificar si el formato RGBA es válido
        const rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*([\d.]+)\)$/;
        const match = rgba.match(rgbaRegex);
        
        if (!match) {
            throw new Error('Formato RGBA inválido. Utiliza el formato "rgba(r, g, b, a)".');
        }
        
        // Extraer los valores de color RGBA
        const red = parseInt(match[1], 10);
        const green = parseInt(match[2], 10);
        const blue = parseInt(match[3], 10);
        
        // Convertir el valor de opacidad (alpha) a un número entre 0 y 1
        const alpha = parseFloat(match[4]);
        
        // Verificar si los valores están dentro del rango válido
        if (
            red < 0 || red > 255 ||
            green < 0 || green > 255 ||
            blue < 0 || blue > 255 ||
            alpha < 0 || alpha > 1
        ) {
            throw new Error('Valores de color inválidos. Asegúrate de que los valores estén entre 0 y 255, y la opacidad entre 0 y 1.');
        }
        
        // Convertir los valores RGB a su representación hexadecimal
        const hexRed = red.toString(16).padStart(2, '0');
        const hexGreen = green.toString(16).padStart(2, '0');
        const hexBlue = blue.toString(16).padStart(2, '0');
        
        // Crear el valor hexadecimal completo
        const hex = `#${hexRed}${hexGreen}${hexBlue}`;
        
        return hex;
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





    // Funcions mes grans //
    public static removeHoverStyles() {
        // Si vull mantenir el hover ha de tenir el text .treureHover o mes aviat ":not(.treureHover)" al selector //
        Array.from(document.styleSheets).forEach(styleSheet => {
            try {
                const rules = styleSheet.cssRules || styleSheet.rules;
                if (!rules) return;
    
                for (let i = rules.length - 1; i >= 0; i--) {
                    const rule: any = rules[i];
                    if (rule.selectorText?.includes(':hover') && !rule.selectorText?.includes('.treureHover')) {
                        styleSheet.deleteRule(i);
                    } else if (rule.cssRules) {
                        // Handle nested @media rules or other grouped rules
                        for (let j = rule.cssRules.length - 1; j >= 0; j--) {
                            const nestedRule = rule.cssRules[j];
                            if (nestedRule.selectorText?.includes(':hover') && !nestedRule.selectorText?.includes('.treureHover')) {
                                rule.deleteRule(j);
                            }
                        }
                    }
                }
            } catch (ex) {
                // console.log('Error al acceder a las reglas de la hoja de estilo:', ex);
            }
        });
    }








}
