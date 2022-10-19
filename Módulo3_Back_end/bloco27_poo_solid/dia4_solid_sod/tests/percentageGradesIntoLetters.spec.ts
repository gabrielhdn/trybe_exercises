import 'mocha';
import { expect } from 'chai';
import { percentageGradesIntoLetters } from '../src';

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testando a função "percentageGradesIntoLetters"', function () {
  describe('Quando a nota é maior ou igual a 0.9', function () {
    it('Retorna "A"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.9 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe('Quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
    it('Retorna "B"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.8 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('B');
    });
  });

  describe('Quando a nota é maior ou igual a 0.9', function () {
    it('Retorna "A"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.9 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('A');
    });
  });
});