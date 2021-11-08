/**
 * MODULOS - são arquivos no JavaScript com capacidade de exportar/importar
 * informações de outros arquivos, porém do mesmo tipo.
 */


// exemplos de como exportar arquivos
export function mostraIdade(pessoa) {
	return `A idade de ${pessoa.nome} é $pessoa.idade}`;
}

export function mostraCidadePessoa(pessoa) {
	return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa) {
	return `O hobby de ${pessoa.nome} é ${pessoa.hobbby}`;
}


export {
	mostraIdade,
	mostraCidadePessoa,
	mostraHobby
}


export default mostraHobby;



// exemplos de como importar arquivos
import {funcao, variavel, classe} from './arquivo.js'; // named exports
import valorDefault from './arquivo.js'; // default exports

// trocando nomes de imports
import {arquivo as Apelido} from `./arquivo.js`;
Apelido.method();

// importando todos os dados de um arquivo
import * as INFOS from `./arquivo.js`;
INFOS.methodA();
console.log(INFOS.variavel);



/**
 * vinculando ao aquivo HTML
 * 
 * <script type="module" src="./main.js"></script>
 * 
 * */
 * 