//Variables

var a; //Declarar una variable
var b = 'b'; //Declarar e inicializar
b = 'bb'; //Reinicializar
var a = 'b'; //Redeclaracion


//Global Scope
var fruit = 'Apple'; //variable global
console.log(fruit);

function  bestFruit() {
    console.log(fruit); //La variable la puedo llamar dentro de la function incluso habiendola inicializado por fuera en, el scope global
}

bestFruit();

//Variable sin declarar (Por defecto pasa hacer una variable global)

function countries() {
    country = 'Colombia'; //Global porque no la estoy declarando dentro de la funcion
    console.log(country);
}

countries();
console.log(country);