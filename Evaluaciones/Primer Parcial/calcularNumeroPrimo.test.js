const { numeroPrimo } = require('./calcularNumeroPrimo');

test('Numero primo', () => {
    expect(numeroPrimo(7)).toBe(true);
});

test('numero no primo', () => {
    expect(numeroPrimo(6)).toBe(false);
});
