const d = document;

export default function responsiveTester(form) {
    const formulario = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === formulario) {
            e.preventDefault();//No queremos que se lance la info del form, lo controlaremos mediante JS
            //alert("Formulario enviado");
            tester = window.open(formulario.direccion.value, "tester", `innerWidth=${formulario.ancho.value}, innerHeight=${formulario.alto.value}`);
        }
    });

    d.addEventListener("click",e => {
        if (e.target === formulario.cerrar) {
            tester.close();
        }
    })
}