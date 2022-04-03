// EXERCÍCIO 1
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

// const factorial = (number) => {
//   let res = 1;
//   for (let contador = number; contador > 0; contador -= 1) {
//     res *= contador;
//   }
//   return res;
// }

// console.log(factorial(4));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// EXERCÍCIO 2
// Crie uma função que receba uma frase e retorne qual a maior palavra.

// const longestWord = (phrase) => {
//   const array = phrase.split(' ');
//   let word = array[0];
//   for (let index in array) {
//     if (array[index].length > word.length) {
//       word = array[index];
//     }
//   }
//   console.log(array);
//   return word;
// }

// console.log(longestWord('Eu imagino que vai dar certo'));

// Com sort:

const longestWord = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0];

// código acima faz um array com as palavras da frase (split) e depois aplica um sort com função de ordenação do maior para o menor (b - a). Mostra direto o índice 0 deste resultado, que será o maior valor do array.

console.log(longestWord('Eu imagino que vai dar certo'));

// EXERCÍCIO 4
// Crie um código JavaScript com a seguinte especificação:
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const change = (word) => {
  let string = 'Meu nome é x';
  const array = string.split(' ');
  const newArray = [];
  for (let index in array) {
    if (array[index] === 'x') {
      newArray.push(word);
    } else {
      newArray.push(array[index]);
    }
  }
  return `${newArray.join(' ')}!`;
}

console.log(change('Gabriel'));

/////

const globalArray = ['Escrita', 'Aprendizado', 'JavaScript', 'CSS', 'HTML'];

const addSkills = () => {
  const order = globalArray.sort();
  return `Meu nome é Gabriel!
  
  Minhas cinco principais habilidades são:
  
  - ${order[0]}
  - ${order[1]}
  - ${order[2]}
  - ${order[3]}
  - ${order[4]}`
}

console.log(addSkills(change));