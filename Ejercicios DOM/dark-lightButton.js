
const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
    const themeBtn = d.querySelector(btn);
    const selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙";
    let sun = "☀️";
    
    const lightMode = () => {
        selectors.forEach((el) => {
            el.classList.remove(classDark);
            themeBtn.textContent = moon;
            ls.setItem("theme", "light"); //Hacemos que se guarde el valor en localStorage para conservar el valor del tema en la pagina
        });
    }
    const darkMode = () => {
        selectors.forEach(el => {
            el.classList.add(classDark);
            themeBtn.textContent = sun;
            ls.setItem("theme", "dark"); //key,value en localStorage
        })
    }


    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if (themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", e => {
        if (ls.getItem("theme")===null) {
            ls.setItem("theme","light"); //Si no existe ningun item en localStorage le decimos que guarde la variable de tipo localStorage (theme) con el valor de light
        }
        if (ls.getItem("theme")==="light") {
            lightMode();
        }
        if (ls.getItem("theme")==="dark") {
            darkMode();
        }
    });
}