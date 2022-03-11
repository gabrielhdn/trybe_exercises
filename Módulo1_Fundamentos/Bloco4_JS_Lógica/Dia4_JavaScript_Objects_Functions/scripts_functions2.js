// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let numeros = [12, 3, 20, 7, 10, 1];

// function maiorIndex(array) {

//   let indiceMaior = 0;
  
//   for (let index in array) {
//     if (array[indiceMaior] < array[index]) {
//       indiceMaior = index;
//     }
//   }

//   return indiceMaior;
  
// }

// console.log(maiorIndex(numeros));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let numeros = [2, 4, 11, 7, 10, 0, -3];

// function menorIndex(array) {

//   let indexMenor = 0;

//   for (let index in array) {
//     if (array[index] < array[indexMenor]) {
//       indexMenor = index;
//     }
//   }
//   return indexMenor;
// }

// console.log(menorIndex(numeros));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let nomes = ['Gabriel', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorNome(array) {

//   let maior = array[0];

//   for (let index in array) {
//     if (array[index].length > maior.length) {
//       maior = array[index];
//     }
//   }
//   return maior;
// }

// console.log(maiorNome(nomes));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function somatorio(n) {

//   let res = 0;
//   for (let contador = 1; contador <= n; contador += 1) {
//     res += contador;
//   }
//   return res;
// }

// console.log(somatorio(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function comparacao(word, ending) {

  let verificacao = true;
  let wordReverse = [...word].reverse().join('');
  let endingReverse = [...ending].reverse().join('');
  
  for (let index = 0; index < endingReverse.length; index += 1) {
    if (endingReverse[index] === wordReverse[index]) {
      verificacao = true;
    } else {
      verificacao = false;
    }
  }
  return verificacao;
}

console.log(comparacao('gabriel', 'iel'));