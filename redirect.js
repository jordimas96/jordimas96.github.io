
// LLISTA URLS //

function canviarURL(path) {
    // El búnquer //
    if (path == "bunquer-descarregador")
        return "https://bunquer-descarregador.github.io/";


    // IN2ART //
    if (path == "in2art/demo-video") {
        return document.documentElement.clientWidth >= document.documentElement.clientHeight ?
            "https://www.youtube.com/watch?v=d8kB5c2RFes" :
            "https://www.youtube.com/watch?v=nY2EHO3zcnw";
    }


    // CV //
    if (path == "cv") {
        const idioma = localStorage.getItem("lang");
        if (idioma)
            return `/assets/documents/cv/CV Jordi Mas Parramon ${idioma.toUpperCase()}.pdf`;
        else
            return `/assets/documents/cv`;
    }
    if (["cv/ca", "cv/es", "cv/en"].includes(path)) {
        return `/assets/documents/cv/CV Jordi Mas Parramon ${path.split("/")[1].toUpperCase()}.pdf`;
    }
    if (path == "cv-selector") return "/assets/documents/cv";


    // Play Store //
    if (path == "play-store" || path == "playstore")
        // return "https://jordimas96.github.io/assets_repo/jordimas96.github.io/external-pages/apps/play-store";
        return "assets/_projects/android/play-store/index-simple.html";


    // Foto //
    if (path == "foto" || path == "photo") return "/assets/foto-carnet-2020.jpg";



    return null;
}







// Codi redirecció //
let path = location.pathname.replace(/^\//, '');
let novaUrl = canviarURL(path);
if (novaUrl)
    location.replace(novaUrl);

