/*
    OPERADORES LÓGICOS
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO

    IMPORTANTE
    true em JavaScript tem seu valor definido em 1.
    false em JavaScript tem seu valor definido em 0

    ATENÇÃO
    Em JavaScript tudo pode ser avaliado em true e false.
    É um diferencial da linguagem JavaScript, o que a torna muito interessante.

    Tudo o que for:
    '', "", ´´, 0, null, undefined e NaN,
    são considerado false em JavaScript.


    AND (&&) curto-circuito: 
    A expressão é avaliada até que o resultado falso seja retornado. 
    Se a declaração com && (AND lógico), e o primeiro operando for falso, 
    ocorre um curto-circuito, a expressão posterior não é avaliada,
    e retorna falso.

*/

// Exemplo: Curto-circuito usando o operador AND (&&).
console.log(false && true && true && false); // o primeiro operador sendo false
                                            // e o segundo sendo &&, JavaScript
                                            // para e retorna false

console.log(true && true && true); // O primeiro operandor sendo true e o segundo
                                    // sendo &&, JavaScript segue o fluxo para o
                                    // próximo operador que,  se for true, 
                                    // novamente segue para o próximo operador
                                    // que se for &&, retorna verdade e sendo o
                                    // próximo operando true, retorna ao final 
                                    // um valor true

/*
    Curto-circuito OR (||): 
    A expressão é avaliada até obtermos um resultado verdadeiro, independente 
    das demais condições. Havendo uma expressão || (OU lógico), e o primeiro
    operando for verdadeiro, ocorrerá um curto-circuito, e na sequência
    a expressão interrompida e retorna falso.
*/

// Exemplo: Curto-circuito usando o operador OR (||).
console.log(true || true || true); // O primeiro operador sendo true e o segundo
                                    // operando sendo ||, a operação pára, e o
                                    // JavaScript retorna true.

console.log(true || true || false); // Aqui a operação pára de executar no
                                    // segundo true, e na sequência JavaScript
                                    // retorna true
