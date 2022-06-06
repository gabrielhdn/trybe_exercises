const randomNumber = () => Math.floor(Math.random() * 100);
const stringToUpperCase = (string) => string.toUpperCase();
const firstLetter = (string) => string.split('')[0];
const concatStrings = (s1, s2) => s1.concat(s2);

module.exports = { randomNumber, stringToUpperCase, firstLetter, concatStrings };
