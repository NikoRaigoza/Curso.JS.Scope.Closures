//Strict mode: no permite que se de lo que llamamos hoisting, es una buena practica que nos ayuda a escribir mejor codigo JS

// var pi = undefinded; Hoisting

'use strict';
pi = 3.1426;
console.log(pi); //NO FUNCIONA ya que no la estamos declarando

function myFunction() {
    'use strict';
    return pi = 3.14;
}

console.log(myFunction()); //NO FUNCIONA
