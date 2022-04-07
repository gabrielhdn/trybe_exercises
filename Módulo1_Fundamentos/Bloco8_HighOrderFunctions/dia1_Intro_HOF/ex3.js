// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contagemTotal = (arrayGabarito, arrayRespostas, callback) => {
  const res = callback(arrayGabarito, arrayRespostas);
  return `Sua nota final é ${res}!`;
}

const checar = (array1, array2) => {
  let contagem = 0;
  for (let index in array2) {
    if (array2[index] === array1[index]) {
      contagem += 1;
    } else if (array2[index] !== array1[index] && array2[index] !== 'N.A') {
      contagem -= 0.5;
    }
  }
  return contagem;
}

console.log(contagemTotal(RIGHT_ANSWERS, STUDENT_ANSWERS, checar));