# ***Desafio funções no JS***
- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro;
- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80;
- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro;
- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14;
- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
### ***1 -** Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro;*
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

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
### ***2 -** Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80;*
```js
// exercício reais pra dólar concluído
function converterReaisParaDolares() {
    let reais = prompt('Quantos reais você deseja converter?');
    let cotacaoDolar = 4.80;
    let resultado = reais * cotacaoDolar;
    alert(`Sua conversão final deu ${resultado.toFixed(2)} reais`);
}
```
Nada mais que uma conta simples de conversão de reais para dólar (ou ao contrário, não sei). O complicado na hora é só desenvolver a lógica, mas depois que você pega, flui legal.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### ***3 -** Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro;*
```js
function retangulo(altura, base) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

retangulo(3, 5);
```
Basicamente, ele pede para que a gente faça o cálculo da área e do perímetro do retângulo (obviamente seguindo a fórmula geométrica do retângulo). Após isso, pegamos o resultado e colocamos no console com a unidade de medida correta.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ***4 -** Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14;*
```js
// exercício do círculo concluído
function circulo(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    console.log(`Área do círculo: ${area.toFixed(1)} m²`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(1)} m`);
}

circulo(5);
```
Mesmo esquema do retângulo, só que a gente atribuiu um valor fixo do PI (3,14), para fazermos a conta. Deve estar certo o resultado final, apenas segui as fórmulas do perímetro e área.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### ***5 -** Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*
```js
// exercício da tabuada concluído
function tabuada(numero1, numero2) {
    let multi = numero1 * numero2;
    console.log(`Sua multiplicação é ${multi}.`);
}

tabuada(5, 4);
```
Bom, esse é o mais simples eu acho. Apenas fazer uma função de multiplicação e era isso. Acho que deu pra dar uma leve reforçada em funções, que era algo que eu estava bem ferrado em relação, mas graças a God eu consegui entender pelo menos o mínimo.

