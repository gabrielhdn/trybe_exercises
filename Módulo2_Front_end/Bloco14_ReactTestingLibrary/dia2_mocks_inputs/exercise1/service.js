const randomNumber = () => Math.floor(Math.random() * 100);
const stringToUpperCase = (string) => string.toUpperCase();
const firstLetter = (string) => string.split('')[0];
const concatStrings = (s1, s2) => s1.concat(s2);

const fetchDog = async () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => response.ok ? Promise.resolve(data) : Promise.reject(data));
};

module.exports = { randomNumber, stringToUpperCase, firstLetter, concatStrings, fetchDog };
