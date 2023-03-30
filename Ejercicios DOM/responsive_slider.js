const d = document;

export default function slider() {
    const next = d.querySelector(".slider-btns .next");
    const prev = d.querySelector(".slider-btns .prev");
    const slides = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", (e) => {
        if (e.target === prev) {
            e.preventDefault(); //Para que la pagina no se vaya al inicio
            slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = slides.length - 1;
            }

            slides[i].classList.add("active");
        }

        if (e.target === next) {
            e.preventDefault(); //Para que la pagina no se vaya al inicio
            slides[i].classList.remove("active");
            i++;

            if (i > slides.length - 1) {
                i = 0;
            }

            slides[i].classList.add("active");
        }
    });
}