const d = document;

export default function countdown(id, limitDate, finalMessage) {
    const Countdown = d.getElementById(id);
    const CountdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(); //fecha actual convertida a ms
        let limitTime = CountdownDate - now;
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(limitTime % (1000 * 60) / (1000));

        Countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos para Navidad</h3>`;

        if (limitTime < 0) {
            clearInterval(countdownTempo);
            Countdown.innerHTML = `<h3> ${finalMessage} </h3>`;
        }
    },1000);
}