// Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles.

function multiplicacao(n1: number, n2: number) {
    return n1 * n2;
}

console.log(multiplicacao(2,2))

// função de saudação que deverá receber um nome e retornar uma concatenação "Olá" + nome.

function saudacao(nome: string) {
    return `Olá ${nome}`;
}

console.log(saudacao('maria'))