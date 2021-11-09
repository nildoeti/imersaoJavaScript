/**
 * (condição)? 'valor para true' : 'valor para false'
 * 
 * */
	
// exemplo 1
pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000? 'É VIP' : 'Não é VIP';
console.log(nivelUsuario);

// exemplo 2
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);