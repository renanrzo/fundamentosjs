// type number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica);

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = numeroPontoFlutuante - pontoFlutuanteSemZero;

console.log(novaOperacao);

//NaN => Not a Number(nâo é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);

// Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero 
//  não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN



