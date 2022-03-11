const a = 10;
const b = 2;

let adicao = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(divisao);
console.log(multiplicacao);
console.log(modulo);

// COM FUNÇÃO:

function contas(n1, n2) {
  console.log(n1 + n2);
  console.log(n1 - n2);
  console.log(n1 / n2);
  console.log(n1 * n2);
  console.log(n1 % n2);
}

contas(10, 5);
