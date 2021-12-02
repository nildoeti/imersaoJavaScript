const numero = Number(prompt('Digite o primeiro número: '));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;


// numero quadrado
const numeroQuadrado = document.getElementById('quadrado');
numeroQuadrado.innerHTML = `${numero}² : ${numero * numero}`;

// é inteiro?
const numeroInteiro = document.getElementById('inteiro');
numeroInteiro.innerHTML = `${numero} é inteiro? ${Number.isInteger(numero)}`;

// NaN
const naoNumero = document.getElementById('naoNum');
naoNumero.innerHTML = `${numero} não é um número? ${Number.isNaN(numero)}`;

// arredonda para cima
const arredondaCima = document.getElementById('arredondaC');
arredondaCima.innerHTML = `${numero} arredondado para cima é ${Math.ceil(numero)}`;

// arredonda para baixo
const arredondaParaBaixo = document.getElementById('arredondaB');
arredondaParaBaixo.innerHTML = `${numero} arredondado para baixo é ${Math.floor(numero)}`;

// fixa em duas casa decimal
const fixaEmDuasCasaDecimal = document.getElementById('casaDecimal');
fixaEmDuasCasaDecimal.innerHTML = `${numero} fixado em duas casas decimais é ${numero.toFixed(2)}`;
