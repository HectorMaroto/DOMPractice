const d = document;
const w = window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        //console.log("MQ",breakpoint,e.matches);
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint); //Para que se ejecute segun cargue la pagina
}