/*
  DESAFIO
  Criar variáveis para a declaração abaixo, e exibir seus valores

  Marcelo Tooto tem 30 anos, pesa   84kg
  tem 1.8 de altura e seu IMC é de 25.925925925925924
  Marcelo Tooto nasceu em ?
*/

const nome = 'Marcelo';
const sobreNome = 'Tooto';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.8;
let indiceMassaCorporal = (peso / (alturaEmCm * alturaEmCm));
let anoNascimento = 2021 - idade;

primeira solução
console.log(nome, sobreNome, 'têm', idade, 'anos');
console.log('tem', alturaEmCm, 'metros de altura, e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobreNome, 'nasceu em', anoNascimento);
