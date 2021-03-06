// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// 2. Modifique a estrutura da função para que ela seja uma arrow function .
// 3. Modifique as concatenações para template literals .

// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo!';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

const testingScope = (escopo) => escopo === true ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo!' : 'Não devo ser utilizada fora do meu escopo (else)';

console.log(testingScope(true));

// 1. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// 2. Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// 3. Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compareNumbers = (a, b) => a - b;

const order = (array) => `Os números ${array.sort(compareNumbers)} se encontram ordenados de forma crescente!`;
console.log(order(oddsAndEvens));