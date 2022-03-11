// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function palindromo(string) {

//   string = string.toLowerCase();
  
//   let word = '';
  
//   for (let index = string.length - 1; index >= 0; index -= 1) {
//     word += string[index];
//   }

//   if (string === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromo('Arara'));

function palindrome(palavra) {

  palavra = palavra.toLowerCase();

  let palavraSplit = palavra.split('');
  let arrayReverse = palavraSplit.reverse();
  let palavraReverse = arrayReverse.join('');

  if (palavra === palavraReverse) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindrome('Arara'));

// FORMA SIMPLIFICADA PARA INVERTER UMA STRING:

let word = 'Herdina';
let reversed = [...word].reverse().join('');

console.log(reversed);

// Código acima pode ser escrito como: 

// let reversed = word.split('').reverse().join('');

// ou por partes:

// let wordSplit = word.split(''); // transforma a palavra em um array
// let arrayReverse = wordSplit.reverse(); // inverte o array
// let wordReverse = arrayReverse.join('');



