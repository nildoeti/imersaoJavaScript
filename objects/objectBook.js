/*
    Objects são coleções de dados em gerados em pares valres.
*/

var livro = new Object();

livro.titulo = 'AJAX com jQUERY';
livro.autor = 'Mauricio Sammy silva';
livro.pagina = '432';
livro.preco = 'R$69,00';
livro.freteSedex = function(ceporigem, cepdestino, peso) { // método freteSedex
    var valorFrete = '';
    // script valor do frete
    return valorFrete = (ceporigem - cepdestino) / peso ;
};

// adicioando novas propriedades valores ao Object livro
livro.capitulo1 = 'Revisão de AJAX';
livro.capitulo2 = 'Funções para requisições AJAX';
livro.capitulo3 = 'Eventos e miscelânea';
livro.capitulo4 = 'requisições XML';
livro.capitulo5 = 'Introdução ao formato JSON';
livro.capitulo6 = 'requisição JSON';

livro.preco = 'R$72,00'; // alterando o preço anterior do Object livro

// recomperando os valores das propriedades e métodos
var nomeAutor = livro.autor;
var capituloCinco = livro.capitulo5;
var valorFrete = livro.freteSedex(5205004, 4819012, 0.20);

var pares = '';
for (var prop in livro) {
    pares += prop + ': ' + livro[prop] + '\n';
}
console.log(pares);
