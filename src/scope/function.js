//function scope

function greeting() {
    let userName = 'Niko';
    console.log(userName);

    if (userName === 'Niko') {
        console.log(userName);
    }
}

greeting(); //Funciona, las variables que declaro dentro de la funcion, funcionan dentro de la funcion

console.log(userName); //No funciona, al estar fuera de la funcion no puede mandar a llamar las variables que estan dentro de la funcion