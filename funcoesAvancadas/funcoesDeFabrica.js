// Factory function (Função fábrica)
// Constructor function (Função construtora)

// exemplo 1 para factory function
// function criaPessoa(nome, sobreNome){
//     return {
//         nome,
//         sobreNome,
//     };
// }
//
// const p1 = criaPessoa('Fulano', 'de Tal');
// console.log(p1);

// exemplo 2 para factory function
function criaPessoa(nome, sobreNome, a, p) {
    return {
        nome,
        sobreNome,

        // Getter
        get nomeCompleto()
    }
}
