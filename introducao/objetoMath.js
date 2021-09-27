let primeiroNumero = 9.999;

let resultado1 = Math.floor(primeiroNumero); // arredonda para baixo
console.log(resultado1);

let resultado2 = Math.ceil(primeiroNumero); // arredonda para cima
console.log(resultado1);

let resultado3 = Math.round(primeiroNumero); // arredonda o valor de um número
console.log(resultado3);

// metodo max()
console.log(Math.max(3, 6, 9, -7)); // 9

// método min
console.log(Math.min(3, 6, 9, -7)); // 3

// método radon()
const numeroAleatorio1 = Math.random() * (1-2) + 2;
console.log(numeroAleatorio1);

// arredondando números aleatório
const numeroAleatorio2 =  Math.round(Math.random(10-5) + 2.567);
console.log(numeroAleatorio2);

// pi
console.log(Math.PI);

// Potência de um número
console.log(Math.pow(10, 3)); // 1000

// raiz quadrada de um número
let numero = 9;
console.log(numero ** (1/2)); // primeira forma
console.log(numero ** 0.5); // segunda forma
console.log(Math.sqrt(numero)); // terceira forma

// CUIDADO com números divididos por 0 em JavaScript
console.log(100 / 0); // Infinity
console.log(100 / 00001); // JavaScript entende 00001 como valor 1
console.log(10 * 00001); // Novamente JavaScript entende 00001 como 1
