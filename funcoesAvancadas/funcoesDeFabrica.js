// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobreNome){
    return {
        nome, sobreNome
    };
}

const p1 = criaPessoa('Fulano', 'de Tal');
console.log(p1);
