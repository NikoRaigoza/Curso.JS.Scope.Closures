//Hoisting: JavaScript eleva las variables cuando se mandan a llamar sin ser declaradas previamente y les da un valor de undefined

// var nameOfDog; // undefined

// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

//como funciona en una funcion

var elmo; // undefined
function nameOfDog() { //las funciones tambien se elevan o hacen hoisting
    console.log(`El mejor perrito es ${elmo}`);
}

nameOfDog(); //Mando a llmar la funcion sin antes ser declarada ni construida


function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';