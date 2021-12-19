const fruit = 'banana';

switch (fruit) {
	case 'banana':
		console.log('R$ 3,00 / kg');
		break;
	case 'mamão':
	case 'pera':
		console.log('R$ 2,00 / kg');
		break;
	default:
		console.log('Produto não encontrado no estoque.');
		break;
}