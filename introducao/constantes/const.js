/**
    const
    Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando
    o palavra-chave let. O valor de uma constante não pode ser alterado por uma
    atribuição, e ela não pode ser redeclarada.

    A  declaração const cria uma variável cujo o valor é fixo, ou seja, uma
    constante somente leitura. Isso não significa que o valor é imutável,
    apenas que a variável constante não pode ser alterada ou retribuída.

*/
const FIRST_NAME = 'Beltrano';
// FIRST_NAME = 'Fulano'; // não podemos reatribuir um valor para uma CONST

console.log(FIRST_NAME);
