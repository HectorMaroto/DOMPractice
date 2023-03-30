import hamburgerMenu from "./menuHamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./countdown.js";
import scrollTopButton from "./ScrollButton.js";
import darkTheme from "./dark-lightButton.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./responsiveTester.js";
import userDeviceInfo from "./userAgent.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./responsive_slider.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./smart_video.js";
import formValidations from "./validForm.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Dec 25, 2023 00:00:00", "Feliz Navidad");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/9Jpfh2kUWBs" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/9Jpfh2kUWBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/nDmQ9sCywQPBusvM9" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7104564230654!2d-3.6866881843511434!3d40.415264663652074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289ff511827b%3A0x9e6c2716b524a3ae!2sParque%20de%20El%20Retiro!5e0!3m2!1ses!2ses!4v1677962184672!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webcam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    formValidations();
});

//EVENTOS DEL TECLADO:
//keydown -> cuando presionas una tecla
//keyup -> cuando soltamos la tecla
//keypress -> mientras tengas la tecla presionada se va a ejecutar el evento

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode"); //Lo sacamos del primer eventListener porque esta funcion ya contiene un listener con el evento DOMContentLoader.
networkStatus();//Se ejecutara cuando haya cambios en nuestra conexion
speechReader();