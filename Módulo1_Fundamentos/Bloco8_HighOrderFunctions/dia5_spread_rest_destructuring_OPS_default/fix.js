// (SPREAD) Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Caqui', 'Ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Kiwi', 'Canela', 'Açúcar'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// (OBJECT DESTRUCTURING)  1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Gabriel',
  age: 26,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const data = {
  ...user,
  ...jobInfos,
};

// (OBJECT DESTRUCTURING) 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const { name, age, nationality, profession, squad, squadInitials } = data;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad} (${squadInitials}).`);

// (ARRAY DESTRUCTURING) 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]);

const [hello, functionS] = saudacoes;

functionS(hello);

// (ARRAY DESTRUCTURING) 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo.

[comida, animal, bebida] = ['arroz', 'gato', 'água'];

console.log(comida, animal, bebida);;

// (ARRAY DESTRUCTURING) 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares; // Coloca o spread, mas retira os 3 primeiros elementos (cada um representado por uma vírgula)

const apenasPares = numerosPares.filter((number) => number % 2 === 0);
numerosPares = apenasPares;

console.log(numerosPares);


