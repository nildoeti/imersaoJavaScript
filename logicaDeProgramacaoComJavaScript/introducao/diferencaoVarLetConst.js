let cor = 'azul';
// let cor = 'branco'; // não pode declarar o mesmo nome de variável com let
cor = 'branco'; // mas pode se reatribuir novo valor para a variável
console.log(cor); // branco

const mes = 'maio' ;
// mes = 'junho'; com const, não é possivel reatribuir novo valor para a variável
console.log(mes);


// var possui escopo de função
// let possui escopo de bloco

var nome = 'Fulano';

function falaOi() {
    var sobreNome = 'Beltrano'; // variável de bloco
    console.log(nome, sobreNome);
}

falaOi();

// console.log(sobreNome); // erro pois a variável sobreNome é protegida no bloco
