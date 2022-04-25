const expense = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const income = 1000;

const calculateExpense = (expense) => expense.reduce((acc, debt) => {
  return acc + Object.values(debt)[0];
}, 0);

const monthExpense = (income, expense, callback) => {
  const totalExpense = callback(expense);
  const balance = income - totalExpense;

  return `Recebido: R$ ${income},00
Gasto: R$ ${totalExpense},00
Saldo: R$ ${balance},00`
};

// console.log(monthExpense(income, expense, calculateExpense));

// PARTE 2

// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// Definição da função getUser
const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// PARTE 3

// const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    // console.log(callback(user));
  }, delay());
};

// getUser2(userFullName2); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser2(userNationality2); // deve imprimir "Ivan is Russian" depois de um certo tempo

// PARTE 4 (LIDANDO COM ERROS)

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, callbackError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      callbackError(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
