let word = 'herdina';
let inverse = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  inverse += word[index];
}

console.log(inverse);