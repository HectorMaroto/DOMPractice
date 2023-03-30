//Menu hamburguesa

export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { //Con este asterisco indicamos que afecta a todo lo que tenga dentro dicho elemento
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active"); //Anadimos la animacion de la libreria
        }

        if (e.target.matches(menuLink)) {
            //Hacemos que se cierre el menu cuando pulsamos una opcion de este
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active"); //Animacion de la libreria
        }
    })
}

