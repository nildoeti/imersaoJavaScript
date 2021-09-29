// ler um número
const numero = Number(prompt('Digite um número: '));

// html h1
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

// quadrado
const numeroQuadrado = document.getElementById('quadrado');
numeroQuadrado.innerHTML = `${numero}² = ${numero * numero}`;

// inteiro? true/false
const numeroInteiro = document.getElementById('inteiro');
numeroInteiro.innerHTML = `${numero} é inteiro? ${Number.isInteger(numero)}.`;

const naoNumero = document.getElementById('naoNum');
naoNumero.innerHTML = `${numero} é NaN? ${Number.isNaN(numero)}`;

// arredonda para cima
const arredondaParaCima = document.getElementById('arredondaC');
arredondaParaCima.innerHTML = `${numero} arredondado para cima: ${Math.round(numero)}`;

// arredonda para baixo
const arredondaParaBaixo = document.getElementById('arredondaB');
arredondaParaBaixo.innerHTML = `${numero} arredondado para baixo: ${Math.floor(numero)}`;

const duasCasasDecimais = document.getElementById('casaDecimal');
duasCasasDecimais.innerHTML = `${numero} com duas casas decimal: ${ numero.toFixed(2)}`;
