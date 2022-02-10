/*
    SWITCH
    A condicional switch avalia uma expressão, combinando o valor da expressão
    para um cláusula case, e executa as instruções  associadas ao case.
    Usar switch/case sempre que possível para ganhar em eficiência e
    performance, se a condicional for a mesma
*/

// exemplo prático
var estadoSudeste = 'SP';

switch (estadoSudeste) {
    case 'MG':
        console.log('Minas Gerais');
        break;
    case 'RJ':
        console.log('Rio de Janeiro');
        break;
    case 'SP':
        console.log('São Paulo');
        break;
    default:
        console.log('opção não identificada');

}

// script acima com uso de if/else
if (estadoSudeste === 'MG') {
    console.log('Minas Gerais');
} else if (estadoSudeste === 'R') {
    console.log('Rio de Janeiro');
} else if (estadoSudeste === 'SP') {
    console.log('São Paulo');
} else {
    console.log('opção não identificada');
}
