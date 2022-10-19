import 'mocha';
import { expect } from 'chai';
import { approvedStudents } from '../src';

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  describe('Quando todas as notas são maiores que 0.7', function () {
    it('Retorna "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const student = {
        name: 'test',
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(true);
    });
  });

  describe('Quando todas as notas são menores que 0.7', function () {
    it('Retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const student = {
        name: 'test',
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });

  describe('Quando parte das notas são menores que 0.7', function () {
    it('Retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const student = {
        name: 'test',
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });
});