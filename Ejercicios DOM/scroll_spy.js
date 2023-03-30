const d=document;

export default function scrollSpy(){
    const sections=d.querySelectorAll(".section[data-scroll-spy]")
    //Usaremos la API IntersectionObserver para detectar la parte visible de nuestra pagina web
    const cb=(entries)=>{
        //console.log("Entries", entries);
        entries.forEach(entry=>{
            const id=entry.target.getAttribute("id"); //nos devuelve el id de cada elemento a del menu
            //console.log("entry",entry);
            if(entry.isIntersecting){ //Esta propiedad es un boolean, hacer referencia a la parte visible del viewport en pantalla
                d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.remove("active")
            }
        })
    }
    const observer=new IntersectionObserver(cb,{//recibe una callback como parametro y un objeto con los atributos
        //root
        //rootMargin:"-300px " //Margenes del observer
        //Otra manera:
        threshold: 0.5 //Siginfica cuando el elemento tenga el 50% en el viewport ya visible, se seleccionara en el menu
    }) 
    //console.log("observer",observer);

    sections.forEach(el=>observer.observe(el));
}