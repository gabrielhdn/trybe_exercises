const service = require('./service');

describe('Testando implementações', () => {

  test('Verifica se a função foi chamada, quantas vezes foi chamada e qual seu retorno', () => {

    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
  
  test('Verifica se a implementação de divisão do mock funciona', () => {
  
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
  });
  
  test('Verifica se a implementação de multiplicação do mock funciona', () => {
  
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(service.randomNumber(3, 3, 3)).toBe(27);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('Verifica reimplementação do mock para retornar o dobro de um único parâmetro', () => {

    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    jest.spyOn(service, "stringToUpperCase" ).mockImplementation(a => a.toLowerCase());

    expect(service.stringToUpperCase("UPPERCASE")).toBe("uppercase");
    expect(service.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.stringToUpperCase).toHaveBeenCalledWith("UPPERCASE");
  });

  test('mockando função que recebe um parâmetro e retorna a última letra', () => {
    jest.spyOn(service, "firstLetter").mockImplementation(a => a.charAt(a.length - 1));

    expect(service.firstLetter("letter")).toBe("r");
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith("letter");
  });

  test('mockando função que recebe 3 parâmetros e os concatena', () => {
    jest.spyOn(service, "concatStrings").mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.concatStrings("tr", "y", "be")).toBe("trybe");
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith("tr", "y", "be");
  });

  test('verificando se as funções são restauradas corretamente', () => {
    service.stringToUpperCase.mockRestore();
    service.firstLetter.mockRestore();
    service.concatStrings.mockRestore();

    expect(service.stringToUpperCase("lowercase")).toBe("LOWERCASE");
    expect(service.firstLetter('Gabriel')).toBe('G');
    expect(service.concatStrings('G', 'H')).toBe('GH');
  });

});
