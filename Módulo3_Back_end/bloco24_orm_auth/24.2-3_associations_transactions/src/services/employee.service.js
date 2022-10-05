const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [{
    //   model: Address, as: 'addresses', attributes: { exclude: ['number'] },
    // }],
  });

  return employee;
};

// WITHOUT TRANSACTION
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const employee = await Employee.create({ firstName, lastName, age });

//   await Address.create({ city, street, number, employeeId: employee.id });
//   return employee;
// };

// UNMANAGED TRANSACTION
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const t = await sequelize.transaction();
//   try {
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t },
//     );

//     // Se chegou até aqui, nenhum erro ocorreu. Podemos finalizar utilizando 'commit'.
//     await t.commit();
//     return employee;
//   } catch (e) {
//     // Se entrou aqui, alguma operação falhou. O sequelize irá reverter as operações com 'rollback'.
//     await t.rollback();
//     console.log(e);
//     throw e; // Jogamos o erro para a controller tratar.
//   }
// };

// MANAGED TRANSACTION
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  // const t = await sequelize.transaction();
  try {
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        { firstName, lastName, age },
        { transaction: t },
      );

      await Address.create(
        { city, street, number, employeeId: employee.id },
        { transaction: t },
      );

      return employee;
    });
    return result;
    // Se chegou aqui, as operações foram concluídas com sucesso e não é necessário encerrar de forma manual.
    // A variável 'result' terá o resultado da transação - no caso um empregado e um endereço cadastrado.
  } catch (e) {
    //Se entrou aqui, alguma operação falhou. O sequelize irá reverter as operações automaticamente.
    console.log(e);
    throw e; // Jogamos o erro para o controller tratar
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};