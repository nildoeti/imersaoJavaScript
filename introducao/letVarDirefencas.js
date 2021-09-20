var cor = 'azul';
var cor = 'amarelo';
/*
    IMPORTANTE
    Foram criadas duas variáveis acima com o mesmo nome, porém com valores
    diferentes.
    ao exibir seu valor com a função log(), o valor 'amarelo', é exibido,
    pois quando criamos uma variável com a palavra chave var, por ser
    um valor variável, então o primeiro valor 'azul', foi substituido pelo
    segundo valor
*/
console.log(cor);

let idade = 19;
// let idade = 20
console.log(idade)

/*
    Neste exemplo:

    let idade = 19
    let idade 20
    console.log(idade)

    Ao se declarar a variável idade, e depois ao declarar ela novamente,
    com o mesmo nome acarretará em erro de sintaxe como na descrição abaixo:

    SyntaxError: Identifier 'idade' has already been declared


    NUNCA FAÇA ISSO
    Nunca declarar variáveis sem let ou const pois a variável assumirá como
    valor global, que pode afetar outras variáveis no sistema.

    marcaCarro = 'Fiat';
*/
