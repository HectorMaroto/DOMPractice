const d = document;
const w = window;
const n = navigator;

export default function networkStatus() {
    const isOnline = () => {
        const Div = d.createElement("div");

        if (n.onLine) {
            Div.textContent = "Conexión restablecida";
            Div.classList.add("online");
            Div.classList.remove("offline");
        } else {
            Div.textContent = "Conexión Perdida";
            Div.classList.add("offline");
            Div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", Div);
        setTimeout(() => d.body.removeChild(Div), 3000);
    }
    w.addEventListener("online", e => isOnline());
    w.addEventListener("offline", e => isOnline());
}