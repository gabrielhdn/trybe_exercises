const chai = require('chai');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]
});

describe('Utilizando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Retorna a lista completa de chocolates', async function () {
    response = await chai
      .request(app)
      .get('/chocolates');

    expect(response.status).to.be.equal(200);

    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    expect(response.body.chocolates).to.deep.equal(output);
  });

  it('Retorna chocolate pelo id', async function () {
    response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);

    const output = [        
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ];
    expect(response.body.chocolate).to.deep.equal(output);
  });

  it('Retorna chocolates pelo brandId', async function () {
    response = await chai
      .request(app)
      .get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);

    const output = [
      {
          "id": 1,
          "name": "Mint Intense",
          "brandId": 1
      },
      {
          "id": 2,
          "name": "White Coconut",
          "brandId": 1
      }
    ];

    expect(response.body.chocolates).to.deep.equal(output);
  });
});