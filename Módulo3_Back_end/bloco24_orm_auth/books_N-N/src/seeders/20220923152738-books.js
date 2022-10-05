'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('books',
      [
        { name: 'O Evangelho segundo Jesus Cristo', release_year: 2017, total_pages: 445 },
        { name: 'Cem Anos de Solidão', release_year: 1967, total_pages: 419 },
        { name: 'Os Miseráveis', release_year: 1862, total_pages: 1511 },
        { name: 'O Lobo da Estepe', release_year: 1927, total_pages: 252 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
