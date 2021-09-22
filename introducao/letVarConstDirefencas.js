/*
    Quando falamos de escopo de uma variável, é por que a variável é finalizada
    ao final de sua execução pois ela esta vinculada ao bloco em que foi
    declarada.
*/
var mensagem = function() {
    var mensagemForaDoIf = 'Mensagem fora do if';
    if (true) {
        var mensagemDentroDoIf = 'Mensagem dentro do if';
        console.log(mensagemForaDoIf); // Mensagem fora do if'
    }
    console.log(mensagemForaDoIf); // Mensagem fora do if'
    console.log(mensagemDentroDoIf); // Mensagem dentro do if
};
