// exercício do círculo concluído
function circulo(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    console.log(`Área do círculo: ${area.toFixed(1)} m²`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(1)} m`);
}

circulo(5);
