/**
  Testa um número com um determinado valor.
  Atendendo a condições para verdadeiro, exibe uma condição.
  Não Atendendo a condição para verdadeiro, executa o bloco do ELSE,
  e exibe uma outra mensagem.
*/

const numero = 10;

// exemplo 1 IF/ELSE com o operador lógico ==
// if (numero == 0) {
//   console.log('O número é iguál a zero');
// } else {
//   console.log('O número é diferente de zero.');
// }

// exmplo 2 com o operador >= e &&
// if (numero > 0 && numero < 5) {
//   console.log('O número está entre 0 e 5');
// } else {
//   console.log('O número é mair que 5');
// }

// exemplo 3 com IF/ELSE/ELSE/IF e uso de operadores lógicos
if (numero >= 0 && numero <= 5) {
  console.log('O número esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número esta entre 6 e 8');
} else if (numero > 9 && numero < 11) {
  console.log('O número esta entre 8 e 11.');
} else {
  console.log('O número não esta entre 0 e 11.');
}
