//en JS las closures proporcionan acceso al ambito lexico con funciones anidadas

function greeting() { //Creo una funcion
    let username = 'Niko'; //Declaro y asigno un valor a una variable

    function displayUserName() { //Creo una funcion anidada
        return `Hello ${username}`; //intento acceder a la variable que pertenece al scope de la funcon padre, en este caso "username" y lo logro
    }

    return displayUserName; //Retorno la funcion anidada sin llaamrla al acabar la funcion padre
}

const g = greeting(); //Una funcion tambien se puede asignar a una varibale

console.log(g); //Aqui retornamos la definicion de la funcion en si
console.log(g()); //Y una vez la ejecutamos la funcion accede al ambito lexico y puede recordar la variable que esta en la funcion padre, en este caso recuerda la variable "usernmame" 