// Completar as propriedades "approved" de acordo com a nota de cada aluno

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

students.forEach((value) => value.grade >= 60 ? value.approved = 'Aprovado' : value.approved = 'Reprovado');

console.log(students);

// Encontrar o primeiro número divisível por 5

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

// Tabuada do 2

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers2.forEach((number) => console.log(number * 2));

// (forEach) 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// (find) 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers3 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  return numbers.find((value) => value % 3 === 0 && value % 5 === 0);
}

console.log(findDivisibleBy3And5(numbers3));

// (find) 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((nome) => nome.length === 5);
}

console.log(findNameWithFiveLetters());

// (find) 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((value) => value.id === id);
}

console.log(findMusic('31031685'));

// (some) 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false.

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((value) => value === name);
}

console.log(hasName(names2, 'Ana'));

// (every) 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((value) => value.age >= minimumAge);
// }

const verifyAges = (arr, minimumAge) => arr.every((value) => value.age >= minimumAge);

console.log(verifyAges(people, 18));

// (sort) 1 - Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => a.age - b.age);

console.log(people2);

// (sort) 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people2.sort((a, b) => b.age - a.age);

console.log(people2);