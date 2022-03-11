let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log(num1);
} else if (num1 < num2) {
  console.log(num2);
} else {
  console.log("Números iguais.");
}

// COM FUNÇÃO:

function maiorNumero(n1, n2) {
  if (n1 > n2) {
    return `${n1} é maior.`;
  } else if (n2 > n1) {
    return `${n2} é maior.`;
  } else {
     return'Os números são iguais';
  }
}

console.log(maiorNumero(5, 10));

