// function moneyBox(coins) {
//     let saveCoins = 0; No recuerda la variable saveCoins cuando adquiere el valor de 5
//     saveCoins += coins;
//     console.log(`Money Box $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

//Ejemplo real

function moneyBox() { //Se crea la funcion sin ningun tipo de parametro
    let saveCoins = 0;
    function  countCoins(coins) { //La funcion anidada si se le pasa un argumento
        saveCoins += coins;
        console.log(`Tu ahorro es de $${saveCoins}`); //la funcion tiene acceso a la variable de la funcion padre y la recuerda
    }
    return countCoins;
}

const myMoneyBox = moneyBox(); //Podemos asignar la funcion a una variable

myMoneyBox(5);
myMoneyBox(10)
myMoneyBox(15); //It works!