// function arrow - exercício 1 concluído
const calcularImc = (peso, altura) => {
    const imc = peso / (altura * altura); 
    return imc.toFixed(2);
}
const imc = calcularImc(60, 1.75);
console.log(imc);
