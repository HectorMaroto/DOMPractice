const d = document;

export default function formValidations(){
    const form=d.querySelector(".contact-form");
    const inputs=d.querySelectorAll(".contact-form [required]");

    inputs.forEach(input=>{
        const span=document.createElement("span");
        span.id=input.name;
        span.textContent=input.title;
        span.classList.add("contact-form-error","none"); //Añadimos por defecto estas clases a los mensajes de error de los campos
        input.insertAdjacentElement("afterend",span);
    });

    d.addEventListener("keyup", e=>{
        if(e.target.matches(".contact-form [required]")){
            let input=e.target;
            let pattern=input.pattern || input.dataset.pattern;

            //console.log(input,pattern);
            if(pattern && input.value!==""){
                console.log("El input tiene patrón");
                let regex=new RegExp(pattern);
                return !regex.exec(input.value) //Si la expresion regular no valida el texto...
                ?d.getElementById(input.name).classList.add("is-active")
                :d.getElementById(input.name).classList.remove("is-active")
            }
            if(!pattern){
                console.log("El input no tiene patrón")
                return input.value==="" //Si el valor del input es igual a nada -> muestra el error
                ?d.getElementById(input.name).classList.add("is-active")
                :d.getElementById(input.name).classList.remove("is-active");
            }
        }
    })


    d.addEventListener("submit",e=>{
        //e.preventDefault(); Si no prevenimos el comportamiento por defecto del form, procesará los datos del form y lo queremos controlar asincronamente con AJAX la peticion de envios
        alert("Enviando formulario");
        const loader=d.querySelector(".contact-form-loader");
        const response=d.querySelector(".contact-form-response");

        loader.classList.remove("none"); //Cuando enviamos el form aparece el loader hasta que aparezca la respuesta del servidor de que la info ha sido enviada
        setTimeout(()=>{
            loader.classList.add("none");
            response.classList.remove("none");
            form.reset(); //Para que se limpien los campos del formulario

            setTimeout(()=>{
                response.classList.add("none");
            },3000);

        },3000);

        
    });
}
