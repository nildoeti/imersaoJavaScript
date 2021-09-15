let user = {
    name: 'Ciclano de Tal'
};

console.log(user);
console.log(user.name);

// alterando a propriedade de um objeto
console.log('...');
user.name = 'Beltrano de Tal';
console.log(user);
console.log(user.name);

console.log('...');
const prop = 'name'; // referencia a variável 'name'
user[prop] = 'Fulano de Tal';
console.log(prop);
console.log(user);

// deletando uma propriedade
console.log('...');
user.lastname = 'Silva & Silva'
console.log(user);

delete user.lastname;
console.log(user);


// função
function chamaNome(nome) {
    return user[nome]
};

user = '45566';
console.log(user);
