const { numeroPrimo } = require('./calcularNumeroPrimo');

test('Numero primo', () => {
    expect(numeroPrimo(7)).toBe(true);
});

