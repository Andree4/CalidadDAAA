const { calcularAreaCirculo } = require('./calcularAreaCirculo');

test('Radio positivo', () => {
    expect(calcularAreaCirculo(5)).toBeCloseTo(78.5398, 4);
});

test('Radio cero', () => {
    expect(calcularAreaCirculo(0)).toBe(0);
});

test('Radio negativo', () => {
    expect(calcularAreaCirculo(-3)).toBeNull();
});

test('Radio grande', () => {
    expect(calcularAreaCirculo(1000)).toBeCloseTo(3141592.6536, 4);
});
