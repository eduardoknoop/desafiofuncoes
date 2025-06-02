// exercício reais pra dólar concluído
function converterReaisParaDolares() {
    let reais = prompt('Quantos reais você deseja converter?');
    let cotacaoDolar = 4.80;
    let resultado = reais * cotacaoDolar;
    alert(`Sua conversão final deu ${resultado.toFixed(2)} reais`);
}
