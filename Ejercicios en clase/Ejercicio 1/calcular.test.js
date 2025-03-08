const { calcularPuntaje } = require('./calcular');

describe('Pruebas de cálculo de puntajes', () => {
    test('Cálculo de puntaje para diplomado', () => {
        expect(calcularPuntaje('diplomado', 2)).toBe(4);
        expect(calcularPuntaje('diplomado', 3)).toBe(4);
    });

    test('Cálculo de puntaje para especialidad', () => {
        expect(calcularPuntaje('especialidad', 1)).toBe(4);
        expect(calcularPuntaje('especialidad', 2)).toBe(6);
        expect(calcularPuntaje('especialidad', 3)).toBe(6);
    });

    test('Cálculo de puntaje para maestría', () => {
        expect(calcularPuntaje('maestria', 1)).toBe(8);
        expect(calcularPuntaje('maestria', 2)).toBe(11);
        expect(calcularPuntaje('maestria', 3)).toBe(11);
    });

    test('Cálculo de puntaje para doctorado', () => {
        expect(calcularPuntaje('doctorado', 1)).toBe(12);
        expect(calcularPuntaje('doctorado', 2)).toBe(12);
    });

    test('Cálculo de puntaje para actualización académica', () => {
        expect(calcularPuntaje('actualizacion', 10)).toBe(6);
    });

    test('Cálculo de puntaje para experiencia profesional', () => {
        expect(calcularPuntaje('experiencia', 5)).toBe(4);
    });

    test('Cálculo de puntaje para servidor público', () => {
        expect(calcularPuntaje('servidor', 5)).toBe(4);
    });

    test('Cálculo de puntaje para docente universitario', () => {
        expect(calcularPuntaje('docente', 2)).toBe(2);
        expect(calcularPuntaje('docente', 3)).toBe(2);
    });

    test('Cálculo de puntaje para artículos', () => {
        expect(calcularPuntaje('articulos', 2)).toBe(2);
        expect(calcularPuntaje('articulos', 3)).toBe(2);
    });

    test('Cálculo total de puntaje', () => {
        const datos = {
            diplomado: 2,
            especialidad: 2,
            maestria: 1,
            doctorado: 1,
            actualizacion: 10,
            experiencia: 5,
            servidor: 5,
            docente: 3,
            articulos: 3
        };
        let total = Object.keys(datos).reduce((acc, key) => acc + calcularPuntaje(key, datos[key]), 0);
        expect(Math.min(total, 30)).toBe(30);
    });
});
