function retangulo(altura, base) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

retangulo(3, 5);
