const d = document;
const n = navigator;

export default function getGeolocation(id) {
    const ide = d.getElementById(id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge:0 //Evitar que se guarden en cache las lecturas, Cada vez que tome una lectura no tenga como referencia la anterior
    };
    const success = (position) => {
        let coords = position.coords;
        //console.log(coords)
        console.log(position);
        ide.innerHTML = `<p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy} metros</b></li>
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 40z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    }
    const error = (err) => {
        ide.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log("Error "+err.code+": "+err.message);
    };

    n.geolocation.getCurrentPosition(success, error, options) //Recibe callback en caso de éxito, otra en caso de error y un objeto con las opciones

    
}