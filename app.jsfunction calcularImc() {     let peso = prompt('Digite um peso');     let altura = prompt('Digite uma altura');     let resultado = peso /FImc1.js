function calcularImc() {
    let peso = prompt('Digite um peso');
    let altura = prompt('Digite uma altura');
    let resultado = peso / (altura * altura);
    alert(`Sua massa corporal é de ${resultado.toFixed(2)}`);
}
