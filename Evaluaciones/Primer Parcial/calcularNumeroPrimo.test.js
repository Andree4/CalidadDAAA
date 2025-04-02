const { numeroPrimo } = require('./calcularNumeroPrimo');

test('Numero primo', () => {
    expect(numeroPrimo(7)).toBe(true);
});

test('numero no primo', () => {
    expect(numeroPrimo(6)).toBe(false);
});

test('Numero negativo', () => {
    expect(numeroPrimo(-3)).toBe(false);
});

test('Numero primo grande', () => {
    expect(numeroPrimo(997)).toBe(true);
});

test('Numero cero', () => {
    expect(numeroPrimo(0)).toBe(false);
});