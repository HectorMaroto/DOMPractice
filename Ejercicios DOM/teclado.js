const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
    const Ball = d.querySelector(ball);
    const Stage = d.querySelector(stage);
    const limits = Ball.getBoundingClientRect(); //posicion y dimensiones del elemento
    const limitsStage = Stage.getBoundingClientRect();
    //console.log(e.keyCode);
    //console.log(e.key);
    //console.log(limits, limitsStage);

    switch (e.keyCode) {
        case 37:
            //move("left");
            if (limits.left > limitsStage.left) {
                x--;
                e.preventDefault(); //Apagar comportamientos por defecto(en este caso paramos el scroll de la pagina mientras movemos la bola)
            }
            
            break;
        case 38:
            //move("up");
            if (limits.top > limitsStage.top) {
                y--;e.preventDefault();
            };
            
            break;
        case 39:
            //move("right");
            if (limits.right < limitsStage.right) {
                x++;
                e.preventDefault();
            }
            
            break;
        case 40:
            //move("down");
            if (limits.bottom < limitsStage.bottom) {
                y++;
                e.preventDefault();
            };
            
            break;
        default:
            break;
    }
    Ball.style.transform = `translate(${x * 10}px,${y * 10}px)`; //movimiento de la bola
}

export function shortcuts(e) {
    /*
    console.log(e.type);
    console.log(e.keyCode);
    console.log(e.key);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);
    */
    if (e.key === 'a' && e.altKey) {
        alert("Has lanzado una alerta con el teclado");
    }
    if (e.key === 'p' && e.altKey) {
        prompt("Has lanzado un aviso con el teclafo");
    }
    
}