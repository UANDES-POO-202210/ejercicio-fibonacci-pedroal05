console.log("Hola"); //así se printea

let x = 10; //el let es solo para declarar una variable.
console.log(x);
//let x = 4; esto no se puede ya que el let es solo para la primera definicion de la variable.
x = 4; //esto si se puede hacer para cambiar el valor.
console.log(x);

const c = 8;
console.log(c);
//let c = 5
//no se puede, ya que c es constante.

let y = 10;
y += 1;
y++;
console.log(y);

function duplicar(x) {
  //así se hacen las funciones
  return 2 * x; //en esta funcion duplicamos el valor de x
}


console.log(duplicar(x));

const doble = duplicar(2);
console.log(doble);
