// Retornar a pessoa mais velha
const pessoas = [
    { nome: 'Beltrano', idade: 62 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Fulana', idade: 55 },
    { nome: 'Beclano', idade: 10},
    { nome: 'Citrano', idade: 64},
    { nome: 'Betrana', idade: 63}
];

const maisVelha = pessoas.reduce( (acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(maisVelha); // { nome: 'Citrano', idade: 64 }