// moldes de funções para criar objetos
// factory function -> funções de fábrica
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Beltrano de', 'Tal');
console.log(p1.nomeCompleto);

function criaProduto(nome, codigo) {
    return {
        nome,
        codigo,
        get produto() {
            return `${this.nome} código: ${this.codigo}`;
        }
    };
}

const pd1 = criaProduto('Sabão', 4562);
console.log(pd1.produto);
console.log(typeof(pd1));
console.log(pd1.nome);
console.log(pd1.codigo);


// constructor function
function Pessoa ( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this); // protegendo as propriedades de serem alteradas
}

const pessoa1 = new Pessoa('Ciclano de', 'Tal');
delete pessoa1.nome;
console.log(pessoa1);
