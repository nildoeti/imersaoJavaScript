const simbol1 = Symbol();
const simbol2 = Symbol();

// simbol são únicos
console.log(simbol1 === simbol2);

// previnir entre nos de propriedades
const nomeSimbol1 = 'nome';
const nomeSimbol2 = 'nome';

console.log(nomeSimbol1);
console.log(nomeSimbol2);

const user = {
	[nomeSimbol1]: 'Fulano',
	[nomeSimbol2]: 'Beltrano',
	lastName: 'Ciclano de Tal'
}

//console.log(user)

// symbol criam propriedades que não são enumberables
for (const key in user) {
	if (user.hasOwnProperty(keys)) {
		console.log(key, user.key);
	}
}
