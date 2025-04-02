function calcularAreaCirculo(radio) {
    if (radio < 0) {
        return null;
    }
    let AreaCirculo = Math.PI * Math.pow(radio, 2);
    return AreaCirculo;
}

module.exports = { calcularAreaCirculo };