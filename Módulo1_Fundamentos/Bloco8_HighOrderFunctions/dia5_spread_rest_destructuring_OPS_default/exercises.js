// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number);

console.log(sum(2, 4, 10));

// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (obj) => {
  const {likes} = obj;
  const {name} = obj;
  return `His name is ${name} and he likes ${likes.join(', ')}.`;
}

console.log(personLikes(alex));
console.log(personLikes(gunnar));

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (array) => {
  const australian20 = array.filter((person) => {
    const {nationality} = person;
    const {bornIn} = person;
    return nationality === 'Australian' && bornIn >= 1900 && bornIn < 2000;
  });
  return `${australian20.map((person) => person.name).join(' and ')}.`;
}

console.log(filterPeople(people));

// 5 - Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

const myList = [1, 2, 3];

const swap = (first, second, third) => [third, second, first];

console.log(swap(...myList));

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está de baixo nível. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = (model, brand, year) => ({
//   model,
//   brand,
//   year,
// });

// console.log(toObject(...palio));

// const toObject = (car) => {
//   const [model, brand, year] = car;
//   return {
//     model,
//     brand,
//     year,
//   };
// };

const toObject = ([model, brand, year]) => ({model, brand, year});

console.log(toObject(chiron));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// const shipLength = (shipObj) => {
//   const { name, length, measurementUnit } = shipObj;
//   return `${name} has ${length} ${measurementUnit} long.`;
// }

const shipLength = ({ name, length, measurementUnit }) => `${name} has ${length} ${measurementUnit} long.`; 

// A desestruturação pode ser feita direto na passagem dos parâmetros.

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params.

const greet = (name = 'pessoa', greeting = 'Tudo bem') => `Olá, ${name}! ${greeting}?`;

console.log(greet());
console.log(greet('Marina'));
console.log(greet('Marina', 'Como você está'));
console.log(greet('Isabela', 'Tudo certo'));

// 9 - Existe um objeto yearSeasons que representa as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica : use object destructuring e spread operator.
// OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);






