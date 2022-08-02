//Block Scope: al usar la palabra reservada 'var' si la mandamos a lllamar fuera del bloque donde la declaramos funciona,
//pero no pasa lo mismo con las otras dos palabras reservadas, 'let' y 'const'. las cuales no funcionan fuera del bloque

function fruits() {
  if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
  }
  console.log(fruit2);
  console.log(fruit3);
  console.log(fruit1);
}

fruits();