const d = document;
const n = navigator;

export default function webcam(id) {
    const video = d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia)

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: true, audio: false }) //Es una Promesa, por lo que debe devolver un objeto
            .then(stream => {
                console.log(stream);
                video.srcObject = stream;
                video.play();
            }).catch(err => {
                video.insertAdjacentHTML("afterend",`<p><mark>${err}</mark></p>`
                );
                console.log("Sucedió el siguiente error: " + err);
            })
        }
    }
