// const texto1 = "Olá mundo!";
// const texto2 = 'Olá mundo!';
// const senha = "senhaSuperSegura456!";
// const stringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Renan";
console.log(citacao);

//concatenação (+)
console.log(citacao + meuNome);

//template string ou template literal pesquisar


//codificação de strings

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//trabalhando com strings

// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//pra saber a quantidade de caracteres eu uso o length
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

// metodos de string para saber mais visitar esse site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
