// factor function - funções de fabrica
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() { // método
            return `${this.nome} ${this.sobrenome}`; // template de strings
        }
    };
}
const p1 = criaPessoa('Fulano', 'de Tal');
console.log(p1.nomeCompleto);
 