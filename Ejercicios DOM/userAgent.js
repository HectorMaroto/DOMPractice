const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
    const ide = d.getElementById(id);
    const isMobile = { //Validaciones -> desde que dispositivo y SO se accede a la pagina
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/ie/i),
        edge: ()=> ua.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.chrome() ||
                this.edge() ||
                this.firefox() ||
                this.opera() ||
                this.safari()
            );
        }
    };
    /*
    console.log(ua);
    console.log(isMobile.android());
    console.log(isMobile.ios());
    console.log(isDesktop.windows());
    */
    
    ide.innerHTML = `
    <ul>
        <li>User Agent:<b>${ua}</b></li>
        <li>Plataforma:<b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>
    `;

    //Contenido exclusivo dependiendo del navegador usado

    if (isBrowser.chrome()) {
        ide.innerHTML += `<p><mark> Este contenido solo se ve en Chrome</mark></p>`;
    }
    if (isBrowser.firefox()) {
        ide.innerHTML += `<p><mark> Este contenido solo se ve en Firefox</mark></p>`;
    }
    if (isDesktop.windows()) {
        ide.innerHTML += `<p><mark> Descarga nuestro software para Windows</mark></p>`;
    }
    if (isDesktop.linux()) {
        ide.innerHTML += `<p><mark> Descarga nuestro software para Linux</mark></p>`;
    }
    if (isDesktop.mac()) {
        ide.innerHTML += `<p><mark> Descarga nuestro software para Mac OS</mark></p>`;
    }

    //Redirecciones
    /*
    if (isMobile.android()) {
        window.location.href = "https://youtube.com";
    }
    */
}
