//Ambito Lexico : tener acceso a las varables dentro de mi funcion que estan declaradas fuera de mi funcion

const myGlobal = 'Niko';

function myFunction() {
    const nickname = 'El pillo';
    console.log(myGlobal); //Funciona, puedo acceder desde mi funcion a la variable global dentro de mi primera funciom

    function parent() {
        const lastName = 'Raigoza';
        console.log(myGlobal, nickname); //Funcionma, puedo acceder desde mi funcion tanto a la varable global como a la variable de la funcion padre

        function child() {
            console.log(myGlobal, nickname, lastName); //Funciona, tambien puedo acceder desde mi funcion a la variables global, tambien a la de la funcion padre y a la de la funcion padre del padre.
        }

        return child();
    }

    return parent();
}

myFunction(); //Funciona, se pueden acceder a las variablesa que estan declaradas e inicializadas por fuera de la funcion que las esta llamando