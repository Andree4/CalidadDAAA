const { calcularAreaCirculo } = require('./calcularAreaCirculo');

test('Radio positivo', () => {
    expect(calcularAreaCirculo(5)).toBeCloseTo(78.5398, 4);
});

test('Radio cero', () => {
    expect(calcularAreaCirculo(0)).toBe(0);
});
