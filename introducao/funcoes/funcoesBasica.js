// primeiro exemplo de função
function saudacao1() { //
    console.log('Bom dia!');
}
saudacao1(); // aqui chamamos a função que exibe 'Bom dia'

// segundo exemplo de função
function saudacao2(nome) { // funão que recebe um parâmetro como argumento
    console.log(`Olá ${nome}`); // exibindo argumento da função com algum valor
}
saudacao2('Matheus'); // chamamos a função com algum valor como seu argumento.
saudacao2('Matheus'); // rechamando a função novamente
saudacao2('Matheus'); // e novamente quantas vezes precisarmos rechamar.
saudacao2('Ana'); // e novamente chamamos a função passando outros valores como argumentos
saudacao2('Ano Novo'); // e aqui mais uma vez adicioando um novo valor para o argumento da função


// terceiro exemplo
function retornaAlgo1() { // função sem parâmetro2re
    return 1234567890; // retorna sempre este valor
}
const numero = retornaAlgo1();
console.log(numero);


// quarto exemplo
function retornaAlgo2(pais) { // função com parâmetro
    console.log(`Eu moro no ${pais}`); // exibindo algo
    return 'E trabalho como Engenheiro de Software.';
}

retornaAlgo2('Brasil'); // envia um valor para o parâmetro da função
const profissao = retornaAlgo2(); // armazena o retorna da função em uma constante
console.log(profissao); // exibindo algo

// quinto exemplo
function corFavorita(cor) { // função com parâmetro
    return `Minha cor favorita é ${cor}`; // retorna algo com o parâmetro da função
}

const minhaCor = corFavorita('preto'); // constante recebe a função com um valor
console.log(minhaCor); // exibindo valor par a constante minhaCor

// função que recebe dois parâmetros
function soma(x, y) { // função recebe dois parâmetro
    const resultado = x + y; // constante resultado recebe a adição dos dois parâmetros
    return resultado; // função retorna a constante resultado
}

const resultadoSoma1 = soma(2, 6); // aqui enviamos dois valores para o parâmetro da função
const resultadoSoma2 = soma(4, 8); // aqui enviamos alteramos os dois valores para o parâmetro da função
const resultadoSoma3 = soma(6, 10); // aqui tmabém alteramos os dois valores para o parâmetro da função
console.log(resultadoSoma1); // exibimos o valor para a constante resultadoSoma1
console.log(resultadoSoma2); // exibimos o valor para a constante resultadoSoma2
console.log(resultadoSoma3); // exibimos o valor para a constante resultadoSoma3

// sexto exemplo
function multiplicacao(a, b) { // a, b tem seus valores aqui como indefinidos
    /**
        o que esta aqui dentro da função está protegido e portanto não pode ser
        acessado fora dela.
    */
    const resultado = a * b;
    console.log('Teste1'); // é exibido
    return resultado; // aqui diz ao JavaScript para encerrar a função
    console.log('Teste2'); //  aqui não é exibido
}

const result1 = multiplicacao(8, 901);
console.log(result1);

// sétimo exemplo
function dividir(x = 10, y = 5) { // inicializando os parâmetros
    const resultado = x / y;
    return resultado;
}

console.log(dividir());

// oitávo exemplo
function subtracao(x = 10, y = 2) {
    const resultado = x - y;
    return resultado;
}

const teste1 = subtracao(); // saida padrão para a função subtracao()
const teste2 = subtracao(5); // alterando um dos parâmetros para a função subtracao()
const teste3 = subtracao(6, 9); // alterando dois parâmetros para a função subtracao()

console.log(teste1);
console.log(teste2);
console.log(teste3);

// novo exemplo: função anônima
const raiz = function(n) { // uma constante que recebe uma função com um parâmetro
    return n ** 0.5;
};
console.log(raiz(25)); // 5
console.log(raiz(250)); // 15.811388300841896
console.log(raiz(1000)); // 31.622776601683793

// décimo exemplo

const restoDivisao = (n) => {
    return n % 2;
}

console.log(restoDivisao(10));
console.log(restoDivisao(105));
console.log(restoDivisao(1876));

// décimo primeiro exemplo
const sub = n => n - 1;
console.log(sub(5)); //  4

// décimo segundo exemplo
const adicaoMult1 = (a, b) => (a * b) + 2;
console.log(adicaoMult1(2, 6)); // 14

// décimo terceiro exemplo
const adicaoMult2 = (a, b, c) => (a + b) * c;
console.log(adicaoMult2(4, 5, 2)); // 18
