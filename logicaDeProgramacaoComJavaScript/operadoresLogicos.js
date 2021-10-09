/*
    OPERADORES LÓGICOS
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO

    IMPORTANTE
    true em JavaScript tem seu valor definido em 1.
    false em JavaScript tem seu valor definido em 0

    Sendo assim, é possivel em JavaScript, fazer a opração de soma
*/


// operação de negação: Negação(!=)
console.log('\nOperação de negação: !=');
console.log(!true); //  false
console.log(!false); // true

// Operador de conjunção E(&&)
console.log('\nOperador de conjunção E(&&)');
console.log(true && true); // 1 -> true
console.log(true && false); // 0 -> false
console.log(false && true); // 0 -> false
console.log(false && false); // 0 -> false

// Operador de Disjunção não-exclusiva OU(||)
console.log('\nOperador de Disjunção não-exclusiva OU(||)');
console.log(true || true); // 1 -> true
console.log(true || false); // 0 -> false
console.log(false || true); // 0 -> false
console.log(false || false); // 0 -> false
