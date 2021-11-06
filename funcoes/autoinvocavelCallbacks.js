// FUNCÕES AUTOINVOCÁVEL
// é uma função anônima entre parênteses seguida de um par de parênteses que 
// representa sua chamada

(
    function() {
        let name = 'Qualquer nome'
        return name;
    } 
)();


// FUNÇÕS AUTOINVOCÁVEL COM USO PARÂMETROS

(
    function(a, b) { // parãmetros: a, b
        return a + b;
    }
) (1, 2); // 3

// FUNÇÕS AUTOINVOCÁVEL COM USO PARÂMETROS E ARMAZENADAS EM UMA VARIÁVEL
const soma3 = (
    function() {
        return a + b;
    }
)(2, 3);


// CALBACKS
// funcões passadas como argumentos para outras funções, sendo uma forma
// de melhor controle de ordem de chamadas

// exemplo 1
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

// exemplo 2
const soma = function(num1, num2) {
    return num1 + num2;
}

// exemplo 3
const sub = function(num1, num2) {
    return num1 - num2;
}

//  controlando qual função chamar
const resultadoSoma = cal(soma, 1, 2); // 3
const resultadoSub = calc(sub, 1, 2); // -1
