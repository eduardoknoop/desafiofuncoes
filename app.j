function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // arredonda pra 2 casas decimais
}
// Exemplo:
console.log(calcularIMC(70, 1.75)); // Resultado: 22.86
