import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss', '../page.scss']
})
export class HomePageComponent extends PageComponent {

    public salutacions = {
        "ca": ["Bon dia!", "Bona tarda!", "Bona nit!"],
        "es": ["¡Buenos días!", "¡Buenas tardes!", "¡Buenas noches!"],
        "en": ["Good morning!", "Good afternoon!", "Good evening!"],
    };

    private experiencia = [
        ["2016-2-1", "2016-7-14"], // DSET (Pràctiques) //
        ["2016-10-17", "2017-2-28"], // Nexxia (Pràctiques) //
        ["2017-7-3", "2017-7-31"], // Beca Indra //
        ["2017-9-4", "2019-3-8"], // Indra //
        ["2020-9-7", "2021-6-25"], // Matic //
        ["2021-8-31", "2023-6-30"], // In2art // -
        ["2023-7-1", "2023-8-22"], // CodiTramuntana // -
        ["2023-8-23", "2023-11-3"], // Orange //
        ["2023-11-6", ], // Evora // -

    ];

    public anysExp: number;
    public anysMesosDiesExp: Array<number>;

    override async ngOnInit() {
        super.ngOnInit();

        // Moviment i animació fons //
        $("body").css({ "background-position": "top left" });

        // Google Analytics //
        if (!this.m.debug) this.m.gas.pageView(window.location.pathname);

        this.calcularAnysExperiencia();
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


    getSalutacioSegonsHora() {
        let horaActual = new Date().getHours();
        let index: number;

        const primeraHoraMati = 5;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 19;

        if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            index = 0;
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            index = 1;
        else
            index = 2;
        
        return this.salutacions[this.m.idioma][index] || "Hey!";
    }

    calcularAnysExperiencia() {
        let diesTotals = 0;
        this.experiencia.forEach(e => {
            let dataInicial = new Date(e[0]);
            let dataFinal = e[1] ? new Date(e[1]) : new Date();
            diesTotals += (dataFinal.valueOf() - dataInicial.valueOf()) / (24 * 60 * 60 * 1000);
        });
        
        diesTotals = Math.round(diesTotals);

        const anys = Math.floor(diesTotals / 365.24);
        diesTotals %= 365.24;
        const mesos = Math.floor(diesTotals / 30.44);
        diesTotals %= 30.44;
        const dies = Math.floor(diesTotals);

        this.anysMesosDiesExp = [anys, mesos, dies];
        this.anysExp = anys;
        if (mesos >= 6)
            this.anysExp++;
    }
    getTextExp() {
        const [anys, mesos, dies] = this.anysMesosDiesExp;
        
        return this.construirCadenaTempsExp(anys, mesos, dies);
    }
    construirCadenaTempsExp(anys: number, mesos: number, dies: number) {
        const index = this.m.idiomaIndex;
        const textAnys = [["any", "anys"], ["año", "años"], ["year", "years"]][index];
        const textMesos = [["mes", "mesos"], ["mes", "meses"], ["month", "months"]][index];
        const textDies = [["dia", "dies"], ["día", "días"], ["day", "days"]][index];
        const conjuncio = this.m.conjuncio;

        let cadenes: Array<string> = [];
        if (anys > 0) cadenes.push(anys + " " + (anys == 1 ? textAnys[0] : textAnys[1]));
        if (mesos > 0) cadenes.push(mesos + " " + (mesos == 1 ? textMesos[0] : textMesos[1]));
        if (dies > 0) cadenes.push(dies + " " + (dies == 1 ? textDies[0] : textDies[1]));

        if (cadenes.length == 3) return `${cadenes[0]}, ${cadenes[1]} ${conjuncio} ${cadenes[2]}`;
        if (cadenes.length == 2) return `${cadenes[0]} ${conjuncio} ${cadenes[1]}`;
        if (cadenes.length == 1) return `${cadenes[0]}`;
        return "";
    }

    getTecnologies() {
        return [
            `Angular, CSS, Javascript, jQuery, Python ${this.m.conjuncio} C#`, // Front //
            `Java, NodeJs, Python, C#, PHP ${this.m.conjuncio} SQL`, // Back //
            `Angular, Java, NodeJs, CSS ${this.m.conjuncio} Python`, // Full //
        ][this.m.area];
    }

    getRutaCV() {
        return `assets/documents/CV/${this.m.idioma.toUpperCase()}/CV Jordi Mas Parramon.pdf`;
    }

    obrirVeureMesSkills() {
        $(".seccioBotoVeureMes").slideUp();
        $(".skills-ocultes").slideDown();
    }

}
