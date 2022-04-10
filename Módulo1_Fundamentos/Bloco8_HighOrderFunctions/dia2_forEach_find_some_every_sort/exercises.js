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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  return books.find((value) => value.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let bookName = books[0].name;
  books.forEach((info) => {
    if (info.name.length < bookName.length) bookName = info.name;
  });
  return bookName;
}

console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getBook() {
  return books.find((book) => book.name.length === 26);
}

console.log(getBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function descendingOrder() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(descendingOrder());

// 5 - Faça uma função que retorne true se todas as pessoas autoras nasceram no século XX e false caso contrário.

function lastCenturyBorn() {
  const isTrue = books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear < 2000);
  return isTrue;
}

console.log(lastCenturyBorn());

// 6 - Faça uma função que retorne true se algum livro foi lançado na década de 80 e false caso contrário.

function bookFromThe80s() {
  return books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);
}

console.log(bookFromThe80s());

// 7 - Faça uma função que retorne true caso nenhum autor tenha nascido no mesmo ano e false caso contrário.

function sameYear() {
  // let isTrue = true;
  // let amount = 0;
  // for (let index = 0; index < books.length; index += 1) {
  //   for (let index2 = 0; index2 < books.length; index2 += 1) {
  //     if (books[index2].author.birthYear === books[index].author.birthYear) {
  //       amount += 1;
  //     }
  //   }
  // }
  // if (amount > 6) isTrue = false;
  // return isTrue;
  return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
  // o "!" no código acima inverte o resultado do some. Como ele encontra um autor diferente do outro com a mesma data de nascimento, seu valor passa a ser true. O resultado do every, porém, precisa ser false caso essa condição seja atendida.
}

console.log(sameYear());