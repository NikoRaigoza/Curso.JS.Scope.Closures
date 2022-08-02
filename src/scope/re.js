//Declaracion y reasignacion de variables en JS

//var

var color; //Declarando - undefined
color = 'red'; //Inicializando
console.log(color); //It works!

var color2 = 'blue'; //declarando e inicializando
color2 = 'yellow'; //reinicializando
console.log(color2); //It works!

var color3 = 'green'; //declarando e inicializando
var color3 = 'black'; //redeclarando y reinicializando
console.log(color3); //It works!


//let

let fruit = 'Apple'; //Declarando e inicializando
fruit = 'Kiwi'; //reInicializando

let fruit = 'Banana'; //Redeclarando y reinicializando

console.log(fruit);// NO FUNCIONA : cuando uso 'let' no puedo re declarar una variable, solo esta permitido reinicializarla


//const

const animal = 'tiger'; //Declaramndo e inicializando
animal = 'cat'; //reInicializando
console.log(animal);// NO FUNCIONA : cuando uso 'const' no puedo ni redeclarar una variable ni reinicializarla (No cambia, es una constante)


const vehicles = [];
vehicles.push('redCar');
console.log(vehicles);

vehicles.pop(); //cuando uso el metodo .pop() no tengo que pasar nada como argumento, ya que no tiene ningun parametro
console.log(vehicles); //Cuando se trata de Arrays u Objetos puedo usar metodos que SI modifiquen estas variables sin importar que esten declarados con 'const'
