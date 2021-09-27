// ler um número
let terminal = Number(prompt('Digite um número: '));

let raizQuadrada = Math.sqrt(terminal); // quadrado de um número?
alert(`A raiz quadrada de ${terminal} é: ${raizQuadrada}`);

let inteiroTrueFalse = Number.isInteger(terminal); // verifica se um número é inteiro
alert(`${terminal} é inteiro? ${inteiroTrueFalse}`);

let naoENumero = Number.isNaN(terminal); // não é um número ?
alert(`${terminal} é NaN? ${naoENumero}`);

let arredondaParaCima = Math.ceil(terminal);
alert(`${terminal} arredondado para cima é: ${arredondaParaCima}`);

let arredondaParaBaixo = Math.floor(terminal);
alert(`${terminal} arredondado para baixo é: ${arredondaParaBaixo}`)

let fixaEmDuasCasasDecimais = terminal.toFixed(2);
alert(`${terminal} fixado em dois digitos: ${fixaEmDuasCasasDecimais}`);
