
// Juego inglés que consiste en contar de 1 a 100 pero
// gritar Fizz cuando el número es divisible por 3,
// gritar Buzz cuando lo es por 5, y gritar FizzBuzz cuando lo es por ambos


var output = [];
var count = 1;

function fizzBuzz() {

  if ((count % 3 === 0) && (x % 5 === 0)) {
    output.push("FizzBuzz");
  }
  else if (count % 3 === 0) {
    output.push("Fizz");
  }
  else if (count % 5 === 0) {
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  count++;
  console.log(output);

}

for (i = 0; i < 100; i++) {
    fizzBuzz();
}
