// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.split();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${tis.nome} está ${assunto}`;
        },

        altura: a,
        peso: p,

        // GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}


const p1 = criaPessoa('Fulano', 'de Tal', 1.8, 80);
console.log(p1.imc);

const p2 = criaPessoa('Beltrano', 'de Tal', 1.90, 57);
console.log(p2.imc);

const p3 = criaPessoa('Ciclano', 'de Tal', 1.5, 110);
console.log(p3.imc);
