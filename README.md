# ***Desafio funções no JS***
- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro;
- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80;
- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro;
- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14;
- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
***1 -** Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro;*
```js
function calcularImc() {
    let peso = prompt('Digite um peso');
    let altura = prompt('Digite uma altura');
    let resultado = peso / (altura * altura);
    alert(`Sua massa corporal é de ${resultado.toFixed(2)}`);
}
```
Aqui foi criada uma função fazendo basicamente o que se pede no enunciado, só que eu adaptei para `prompt`, pois eu não estava conseguindo usar o terminal do VSCode, então tive que fazer isso aí momentaneamente para testar os códigos. Mas uma forma feita para o console é bem simples também:
```js
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // arredonda pra 2 casas decimais
}
// Exemplo:
console.log(calcularIMC(70, 1.75)); // Resultado: 22.86
```
Pelo que dá pra entender, o `alert` no primeiro código funciona como se fosse o `return`, só que ele retorna para o usuário, não no console (eu acho mesmo).
```js
// function arrow - exercício 1 concluído
const peso = Number (prompt('digite um peso'))
const altura = Number (prompt('digite um altura'))
const calcularImc = (peso, altura) => peso / (altura * altura)
const imc = calcularImc(peso, altura);
console.log(imc.toFixed(2));
```
E isso aqui é uma Arrow Function, que é essa merda aí só que mais simples. Eu fiz em formato `prompt`, mas é só retirar os prompts e adicionar o `console.log`, e logo após, adicionar um valor a cada variável que funciona da mesma forma. 
Foi usado também o `Number`, para dizer pro prompt que aquilo que o usuário vai colocar, vai ser um número, pra não ocorrer erro nos dados.
