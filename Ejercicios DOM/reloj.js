const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;
    addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString(); //Hora actual
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null; //Dejar de mostrar el reloj
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
export function alarm(sound,btnPlay,btnStop) {
    let alarmaTempo;
    const alarma = d.createElement("audio");
    alarma.src = sound;

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            alarmaTempo = setTimeout(() => {
                alarma.play();
            }, 2000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmaTempo);
            alarma.pause();
            alarma.currentTime = 0;// reiniciar el audio;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}