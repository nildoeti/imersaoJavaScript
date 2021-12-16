// try {
// 	// console.log(a);
// 	// executa somente se não tiver erros.
// 	console.log('executa somente se não tiver erros.');

// 	try {
// 		console.log(b);
// 	} catch(e) {
// 		console.log('deu erro.');
// 	} finally {
// 		console.log('finally: sou sempre executado.');
// 	}

// } catch(error) {
// 	// executa somente se tiver erros.
// 	console.log('executa somente se tiver erros.');
// } finally {
// 	// executa se tiver ou não erros.
// 	console.log('executa se tiver ou não erros.');
// }

horaCerta = (data) => {
	// verificar se data ém uma instância de Date.
	if (data && !(data instanceof Date)) {
		throw new TypeError('Aguardando instância de Date.');
	}

	// gerar uma data, se data não for uma instância de Date
	if (!data) {
		data = new Date();
	}

	// retorna hora personalizada para pt-BR
	return data.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		millisecond: '2-digit',
		hour12: false
	});

}

try {
	const data = new Date();
	console.log(data);

	const hora = horaCerta('data');
	console.log(hora);

} catch (error) {
	// tratamento de erro
	console.log(error);
} finally {
	console.log('Tenha um bom dia');
}

