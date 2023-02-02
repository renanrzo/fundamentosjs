function apresentar(nome) {
    return `meu nome é ${nome}`;
}


//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de um a nove"
    } else {
        return num1 + num2
    }
}

//hoisting: arrow function se comporta como expressão