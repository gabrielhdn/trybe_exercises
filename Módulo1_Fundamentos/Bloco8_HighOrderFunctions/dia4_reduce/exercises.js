// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const [stringNumbers, boolean, numbers] = arrays;
// const newArray = [...stringNumbers, ...boolean, ...numbers];
// console.log(newArray);

// function flatten() {
//   return arrays.reduce((acc, value) => acc.concat(value),[])
// }

// console.log(flatten());

const reduced = arrays.reduce((acc, value) => acc.concat(value),[]);

// console.log(reduced);

// 2, 3, 4

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = books.reduce((string, book, index) => {
  if (index === books.length - 1) {
    string += `${book.author.name}.`;
  } else {
    string += `${book.author.name}, `;
  }
  return string;
},"");

console.log(reduceNames);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const mediaIdade = books.reduce((med, book) => {
//   med += (book.releaseYear - book.author.birthYear)
// }, 0)

function mediaIdade() {
  const soma = books.reduce((total, book) => {
    total += (book.releaseYear - book.author.birthYear);
    return total;
  }, 0)
  return soma / books.length;
}

console.log(mediaIdade());

// 4 - Encontre o livro com o maior nome.

const biggestName = books.reduce((acc, book) => {
  if (acc.name.length < book.name.length) {
    return book;
  }
  return acc;
})

// const biggestName = books.sort((a, b) => b.name.length - a.name.length)[0]; // Jeito fácil de resolver com sort().

console.log(biggestName);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const howManyAs = names.reduce((total, word) => {
  return total += word.toLowerCase().split('').filter((item) => item === 'a').length;
}, 0)

console.log(howManyAs);

// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const medias = grades.reduce((total, notes) => {
    let med = notes.reduce((acc, num) => acc += num);
    total.push(med / notes.length);
    return total;
  },[])
  return students.map((student, index) => ({
    name: student,
    average: medias[index],
  }))
}

console.log(studentAverage());
