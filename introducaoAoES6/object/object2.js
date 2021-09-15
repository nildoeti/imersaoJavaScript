const user = {
    user: 'Fulano',
    lastname: 'de Tal'
};

// recompera a chave do objeto
console.log(Object.keys(user));

// recompera os valores dos objetos
console.log(Object.values(user));

// recompera array de arrays contendo [nome_propriedade, valor_propriedade]
console.log(Object.entries(user));

// merger propriedade de objetos
Object.assign(user, {fullName: 'Nome completo do usuário'});
console.log(user)

console.log('...')

const objeto1 = {a: 1, b: 2}
const objeto2 = {c: 5, d: 10}

const retornaObjetos = Object.assign(objeto1, objeto2)
console.log(retornaObjetos)
console.log(objeto1)
console.log(objeto2)

console.log(Object.assign({}, user, {age: 22}))

// previne todas as alterações em um objeto
const novoObjeto = {foo: 'bar'};
Object.freeze(novoObjeto)
novoObjeto.foo = 'Silva';

console.log(novoObjeto)
console.log(novoObjeto.foo)

novoObjeto.foo = 'chamada';
console.log(novoObjeto.foo)
delete novoObjeto.foo;
novoObjeto.bar = 'foo';
console.log(novoObjeto)

// permite apenas alterar a propriedade existentes em um objeto
const pessoa = {nome: 'Fulano'};
console.log(pessoa)
console.log(pessoa.nome)

Object.seal(pessoa); 

pessoa.nome = 'Ciclano';
console.log(pessoa)

delete pessoa.nome;
console.log(pessoa);
pessoa.idade = 55;
console.log(pessoa.idade);