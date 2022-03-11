let num1 = 5;
let num2 = 10;
let num3 = 15;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// COM FUNÇÃO:

function maiorNumero(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else if (n3 > n1 && n3 > n2) {
    return n3;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNumero(15, 20, 16));