// seleciona a classe paragrafos
const paragrafos = document.querySelector('.paragrafos');

// seleciona todas as tags p dentro da classe paragrafos
const todosParagrafos = paragrafos.querySelectorAll('p');

// seleciona a cor de fundo do body
const selecionaCorFundoBody = getComputedStyle(document.body);

// pega a cor de fundo do body
const pegaCorFundoBody = selecionaCorFundoBody.backgroundColor;

for (let paragrafo of todosParagrafos) {
    paragrafo.style.backgroundColor = pegaCorFundoBody;
    paragrafo.style.color = '#0e3a85';
}
