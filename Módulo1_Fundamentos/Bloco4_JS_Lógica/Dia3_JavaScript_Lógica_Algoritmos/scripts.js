// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !

// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 10;

// for (let contador = 9; contador > 0; contador -= 1) {
//   fatorial = fatorial * contador;
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'herdina';
let inverse = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  inverse += word[index];
}

console.log(inverse);

// 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menor = array[0];
// let maior = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menor.length) {
//     menor = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maior.length) {
//     maior = array[index];
//   }
// }

// console.log(`A menor palavra do array é "${menor}".`);
// console.log(`A maior palavra do array é "${maior}".`);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);
