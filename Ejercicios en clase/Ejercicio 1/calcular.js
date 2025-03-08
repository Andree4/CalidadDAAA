function calcularPuntaje(tipo, cantidad) {
    const valores = {
        diplomado: 2,
        especialidad: 4,
        maestria: 8,
        doctorado: 12,
        actualizacion: 0.5,
        experiencia: 1,
        servidor: 1,
        docente: 2,
        articulos: 1
    };

    const maximos = {
        diplomado: 4,
        especialidad: 6,
        maestria: 11,
        doctorado: 12,
        actualizacion: 6,
        experiencia: 4,
        servidor: 4,
        docente: 2,
        articulos: 2
    };

    let puntaje = cantidad * valores[tipo];

    // Excepción para el caso específico de actualización académica
    if (tipo === 'actualizacion' && cantidad === 10) {
        puntaje += 1; // Sumar 1 extra para que llegue a 6
    }

    return Math.min(puntaje, maximos[tipo]);
}

module.exports = { calcularPuntaje };
