// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let res = null;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    res = res + 1;
  }
}

if (res === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(res);
}

// ALTERNATIVA:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let res = numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    res = res - 1;
  }
}

console.log(res);